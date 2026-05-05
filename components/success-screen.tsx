'use client';

import { CheckCircle } from 'lucide-react';
import EventCard from './event-card';
import { Button } from '@/components/ui/button';

interface SuccessScreenProps {
  participantName: string;
  email: string;
  uniqueId: string;
  onRegisterAnother: () => void;
}

export default function SuccessScreen({
  participantName,
  email,
  uniqueId,
  onRegisterAnother,
}: SuccessScreenProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-b from-indigo-500/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-t from-cyan-500/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-2xl mx-auto w-full relative z-10">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 to-cyan-500/30 rounded-full blur-2xl animate-pulse" />
              <CheckCircle className="relative w-20 h-20 text-cyan-400" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-black glow-text mb-6">
            Registration Confirmed!
          </h1>

          <p className="text-xl text-gray-300 mb-2">
            Thank you for registering, <span className="font-bold text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text">{participantName}</span>
          </p>
          <p className="text-gray-400">
            A confirmation email has been sent to <span className="font-mono text-cyan-400">{email}</span>
          </p>
        </div>

        {/* Event Card */}
        <div className="mb-16">
          <p className="text-center text-gray-400 mb-8 text-lg">
            Your digital event pass is ready
          </p>
          <EventCard participantName={participantName} uniqueId={uniqueId} />
        </div>

        {/* Next Steps */}
        <div className="card-glow rounded-3xl p-8 mb-10">
          <h2 className="text-2xl font-bold glow-text mb-8">What&apos;s Next?</h2>
          <ul className="space-y-4">
            {[
              'Check your email for the confirmation and workshop details',
              'Download your event pass and save it for the day',
              'Join our online community to connect with other attendees',
              'Mark June 15, 2026 on your calendar'
            ].map((step, i) => (
              <li key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                  {i + 1}
                </div>
                <span className="text-gray-300 pt-0.5">{step}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={onRegisterAnother}
            variant="outline"
            className="px-8 py-6 border-indigo-500/30 text-gray-300 hover:bg-white/5 hover:border-indigo-500/50 transition-all rounded-xl font-semibold"
          >
            Register Another Participant
          </Button>
          <Button className="glow-button px-8 py-6 text-base">
            Return to Workshop
          </Button>
        </div>
      </div>
    </section>
  );
}
