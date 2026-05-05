# Google Sheets Integration Setup

This workshop registration system is currently using in-memory storage for development. To persist data to Google Sheets (as recommended), follow these steps:

## Step 1: Set Up Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable the Google Sheets API:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click "Enable"

## Step 2: Create a Service Account

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Fill in the service account details
4. Click "Create and Continue"
5. Skip the optional steps
6. Once created, click on the service account
7. Go to "Keys" tab
8. Click "Add Key" > "Create new key"
9. Choose "JSON" format
10. Save the JSON file securely

## Step 3: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com/)
2. Create a new spreadsheet named "Workshop Registrations"
3. Set up columns:
   - A: Name
   - B: Email
   - C: Phone
   - D: College/Department
   - E: Timestamp
4. Share the sheet with the service account email address (from the JSON file)
   - Get the `client_email` from the JSON file
   - Click "Share" and paste the email
   - Give it "Editor" access

## Step 4: Configure Environment Variables

Add these to your `.env.local` file:

```
GOOGLE_SHEETS_ID=YOUR_SPREADSHEET_ID
GOOGLE_SHEETS_API_KEY=YOUR_API_KEY
```

To get the Spreadsheet ID:
- Open your Google Sheet
- The ID is in the URL: `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`

## Step 5: Install Dependencies

```bash
npm install googleapis google-auth-library
# or
pnpm add googleapis google-auth-library
```

## Step 6: Update the API Route

Replace `/app/api/register/route.ts` with the Google Sheets implementation:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import { JWT } from 'google-auth-library';

const serviceAccount = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT || '{}');
const spreadsheetId = process.env.GOOGLE_SHEETS_ID;

const auth = new JWT({
  email: serviceAccount.client_email,
  key: serviceAccount.private_key,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, college } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Add to Google Sheets
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: spreadsheetId!,
      range: 'A1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[name, email, phone || '', college || '', new Date().toISOString()]],
      },
    });

    const uniqueId = `WS${Date.now()}`;

    return NextResponse.json(
      {
        success: true,
        message: 'Registration successful',
        uniqueId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Registration failed' },
      { status: 500 }
    );
  }
}
```

## Step 7: Add Service Account JSON

Create a `secrets.json` file in your project root with the downloaded JSON content, then:

```bash
export GOOGLE_SERVICE_ACCOUNT=$(cat secrets.json | jq -c '.' | jq -Rs '.')
```

Or add it directly to your Vercel environment variables (Settings > Environment Variables)

## Testing

1. Fill out the registration form
2. Check your Google Sheet - the data should appear automatically
3. Test different scenarios (missing fields, invalid emails, etc.)

## Notes

- The service account JSON contains sensitive credentials - never commit it to version control
- Always use environment variables for secrets
- In development, you can use the `/api/register` GET endpoint to view all registrations

## Troubleshooting

**"Permission denied" error:**
- Ensure the service account email has access to the Google Sheet
- Double-check the spreadsheet ID

**"API not enabled" error:**
- Make sure the Google Sheets API is enabled in Cloud Console

**Connection timeout:**
- Check your internet connection
- Ensure CORS is properly configured if using from client-side
