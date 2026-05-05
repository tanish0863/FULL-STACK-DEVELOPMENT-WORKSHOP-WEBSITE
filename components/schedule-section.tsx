'use client';

import { Clock } from 'lucide-react';

export default function ScheduleSection() {
  const sessions = [
    {
      time: '9:00 AM - 9:30 AM',
      title: 'Welcome & Breakfast',
      description: 'Arrival, registration, and light breakfast',
      speaker: null,
    },
    {
      time: '9:30 AM - 11:00 AM',
      title: 'AI Fundamentals for Production',
      description: 'Core concepts, architectures, and best practices',
      speaker: 'Sarah Chen',
    },
    {
      time: '11:00 AM - 11:15 AM',
      title: 'Break',
      description: 'Coffee and networking',
      speaker: null,
    },
    {
      time: '11:15 AM - 12:45 PM',
      title: 'Building Scalable Full-Stack Applications',
      description: 'Modern patterns, tools, and architectural decisions',
      speaker: 'Marcus Rodriguez',
    },
    {
      time: '12:45 PM - 1:30 PM',
      title: 'Lunch',
      description: 'Catered lunch with networking opportunities',
      speaker: null,
    },
    {
      time: '1:30 PM - 3:00 PM',
      title: 'Hands-on Workshop: Building an AI-Powered Feature',
      description: 'Live coding session with real-world examples',
      speaker: 'Elena Kowalski & Sarah Chen',
    },
    {
      time: '3:00 PM - 3:15 PM',
      title: 'Break',
      description: 'Refresh and networking',
      speaker: null,
    },
    {
      time: '3:15 PM - 4:30 PM',
      title: 'Advanced Topics & Q&A',
      description: 'Deep dive into advanced patterns and panel discussion',
      speaker: 'All Speakers',
    },
    {
      time: '4:30 PM - 5:00 PM',
      title: 'Wrap-up & Closing Remarks',
      description: 'Key takeaways and next steps',
      speaker: null,
    },
  ];

  return (
    <section className="py-32 px-4 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-40 right-1/4 w-80 h-80 bg-gradient-to-t from-cyan-500/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 glow-text text-center">
          Workshop Schedule
        </h2>

        <div className="space-y-4">
          {sessions.map((session, index) => {
            const isBreak = !session.speaker;
            return (
              <div
                key={index}
                className={`relative group transition-all duration-300 ${isBreak ? '' : 'card-glow p-6'}`}
              >
                {!isBreak && (
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/5 to-cyan-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
                
                <div className={`relative ${isBreak ? 'p-6 rounded-2xl bg-white/5 border border-white/10' : ''}`}>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <Clock className="w-5 h-5 bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent" />
                        <span className="text-sm font-mono bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent font-bold">
                          {session.time}
                        </span>
                      </div>
                      <h3 className={`text-lg font-bold mb-2 transition-colors ${isBreak ? 'text-gray-400' : 'text-white group-hover:text-cyan-300'}`}>
                        {session.title}
                      </h3>
                      <p className={`text-sm transition-colors ${isBreak ? 'text-gray-500' : 'text-gray-300 group-hover:text-gray-200'}`}>
                        {session.description}
                      </p>
                    </div>
                    {session.speaker && (
                      <div className="text-right md:text-left">
                        <div className="px-3 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/30 to-cyan-500/30 border border-indigo-500/50 group-hover:border-cyan-400/70 transition-colors">
                          <p className="text-xs bg-gradient-to-r from-indigo-300 to-cyan-300 bg-clip-text text-transparent font-bold">
                            {session.speaker}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
