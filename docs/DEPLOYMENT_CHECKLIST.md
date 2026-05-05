# Deployment Checklist

Complete this checklist before deploying to production.

## Pre-Deployment Testing

### Functionality
- [ ] Registration form submits successfully
- [ ] Form validation works (name, email required)
- [ ] Email validation rejects invalid emails
- [ ] Success screen displays after registration
- [ ] Event card generates and displays correctly
- [ ] Card download works as PNG
- [ ] "Register Another" button works
- [ ] Modal can be closed
- [ ] All page sections load correctly

### UI/UX
- [ ] Mobile responsive (test on 320px, 375px, 768px, 1024px)
- [ ] All animations smooth and not jarring
- [ ] Colors consistent throughout
- [ ] Typography hierarchy clear
- [ ] Links and buttons clickable and styled correctly
- [ ] No horizontal scroll on any device
- [ ] Images load properly
- [ ] Icons display correctly

### Performance
- [ ] Page loads in under 3 seconds
- [ ] No console errors
- [ ] No console warnings (except expected ones)
- [ ] Network requests are reasonable
- [ ] No memory leaks in DevTools
- [ ] API response time acceptable

### Accessibility
- [ ] Tab navigation works smoothly
- [ ] Form labels associated with inputs
- [ ] Color contrast meets WCAG AA
- [ ] Screen reader reads content correctly
- [ ] No keyboard traps
- [ ] Focus indicators visible

### Cross-Browser
- [ ] Chrome latest
- [ ] Firefox latest
- [ ] Safari latest
- [ ] Edge latest
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

## Content Review

### Event Information
- [ ] Event date is correct
- [ ] Event time is correct
- [ ] Location is correct (NYC & Online)
- [ ] Workshop title is final
- [ ] Description matches your workshop

### Speaker Information
- [ ] Speaker names are correct
- [ ] Job titles are accurate
- [ ] Company names are correct
- [ ] Bios are complete and accurate
- [ ] No typos in speaker information

### Schedule
- [ ] All session times are accurate
- [ ] Session titles are correct
- [ ] Session descriptions are complete
- [ ] Speaker names match schedule
- [ ] No scheduling conflicts
- [ ] Break times are appropriate

### Event Card
- [ ] Event name is correct on card
- [ ] Date/time format is clear
- [ ] Card design looks professional
- [ ] Text is readable
- [ ] Card dimensions are appropriate

## Configuration

### Environment Variables
- [ ] All required env vars are set (if using Google Sheets)
- [ ] No sensitive data in code
- [ ] No API keys in repository
- [ ] .env.local file is in .gitignore
- [ ] Production env vars are different from dev

### Build
- [ ] `pnpm build` completes without errors
- [ ] No TypeScript errors
- [ ] No ESLint warnings
- [ ] Bundle size is reasonable

### SEO (Optional)
- [ ] Page title is descriptive
- [ ] Meta description is complete
- [ ] Open Graph tags are set
- [ ] Favicon is configured
- [ ] robots.txt is appropriate

## Data Persistence

### Development
- [ ] In-memory storage working in dev
- [ ] GET /api/register shows registrations
- [ ] Data persists across page reloads (for same session)

### Production
- [ ] Choose storage option: Google Sheets or Database
- [ ] If Google Sheets:
  - [ ] Follow SETUP_GOOGLE_SHEETS.md
  - [ ] Service account created
  - [ ] Google Sheet shared with service account
  - [ ] Environment variables set
  - [ ] Test registration stores in sheet
- [ ] If Database:
  - [ ] Database connection configured
  - [ ] Tables/schema created
  - [ ] Connection string in env vars
  - [ ] Test write/read operations

## Documentation

### Project Documentation
- [ ] README.md is complete
- [ ] QUICKSTART.md is clear and accurate
- [ ] SETUP_GOOGLE_SHEETS.md is comprehensive
- [ ] Comments are added where needed
- [ ] API documentation is clear

### User Documentation
- [ ] Instructions for customization are clear
- [ ] Troubleshooting section covers common issues
- [ ] Quick reference is easy to find
- [ ] Contact information is provided

## Deployment Options

### Option 1: Vercel (Recommended)
- [ ] Create Vercel account
- [ ] Connect GitHub repository (if using Git)
- [ ] Set environment variables in Vercel
- [ ] Deploy with `vercel deploy`
- [ ] Test production build
- [ ] Set up custom domain (optional)
- [ ] Configure auto-deployments (optional)

### Option 2: Traditional Hosting
- [ ] Run `pnpm build`
- [ ] Copy `.next` folder to server
- [ ] Install Node.js on server
- [ ] Set environment variables
- [ ] Run `pnpm start` or use process manager (PM2)
- [ ] Set up reverse proxy (nginx/Apache)
- [ ] Configure SSL certificate
- [ ] Set up domain DNS

### Option 3: Docker
- [ ] Create Dockerfile
- [ ] Build Docker image
- [ ] Test Docker image locally
- [ ] Push to container registry
- [ ] Deploy to container platform (AWS, GCP, etc.)
- [ ] Set up environment variables
- [ ] Configure load balancer

## Post-Deployment

### Live Testing
- [ ] Website loads correctly
- [ ] All sections visible
- [ ] Registration form works
- [ ] Form validation works
- [ ] Success screen displays
- [ ] Card downloads work
- [ ] API responses are correct
- [ ] No 404 or 500 errors

### Monitoring
- [ ] Set up error tracking (Sentry, etc.)
- [ ] Set up analytics (Google Analytics, PostHog, etc.)
- [ ] Monitor API response times
- [ ] Check error rates daily
- [ ] Monitor registrations/data storage
- [ ] Set up alerts for critical errors

### Security
- [ ] HTTPS is enabled
- [ ] Security headers are configured
- [ ] Form inputs are sanitized
- [ ] API endpoints validate input
- [ ] No sensitive data in logs
- [ ] Rate limiting is configured (optional)
- [ ] CORS is properly configured

### Backup & Recovery
- [ ] Database/Google Sheet is backed up
- [ ] Backup strategy is defined
- [ ] Recovery plan is documented
- [ ] Test restore process

## Marketing & Promotion

### Before Launch
- [ ] Email campaign prepared
- [ ] Social media posts drafted
- [ ] Website URL is finalized
- [ ] QR code generated (if needed)
- [ ] Promotional materials created

### At Launch
- [ ] Send launch email
- [ ] Post on social media
- [ ] Share on relevant forums
- [ ] Update LinkedIn/professional networks
- [ ] Notify potential attendees

### After Launch
- [ ] Monitor registration rate
- [ ] Respond to inquiries quickly
- [ ] Track analytics
- [ ] Gather feedback
- [ ] Make improvements based on feedback

## Performance Optimization

- [ ] Images are optimized
- [ ] CSS is minified
- [ ] JavaScript is minified
- [ ] Unused code is removed
- [ ] Caching headers are set
- [ ] CDN is configured (if applicable)
- [ ] Database queries are optimized
- [ ] API response times are logged

## Final Checklist

### Before Going Live
- [ ] All tests pass
- [ ] No console errors
- [ ] Documentation is complete
- [ ] Team is trained on system
- [ ] Support plan is in place
- [ ] Backup strategy is ready
- [ ] Monitoring is configured
- [ ] Team contact info is shared

### Launch Day
- [ ] Deploy to production
- [ ] Run final smoke tests
- [ ] Monitor closely for errors
- [ ] Be ready to rollback if needed
- [ ] Have team on standby

### Post-Launch (First Week)
- [ ] Monitor error rates daily
- [ ] Check registrations are storing correctly
- [ ] Respond to user feedback
- [ ] Make any critical fixes
- [ ] Document any issues found
- [ ] Plan follow-up improvements

## Sign-Off

- [ ] Project Manager Approval: _____________ Date: _______
- [ ] Technical Lead Approval: _____________ Date: _______
- [ ] Deployment Authorized By: _________ Date: _______

---

**Ready to deploy?** 🚀

Once all items are checked, you're good to go live!
