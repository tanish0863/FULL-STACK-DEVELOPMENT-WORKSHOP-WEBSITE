'use client';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export default function SpeakerSection() {
  const speakers = [
    {
      name: 'Sarah Chen',
      role: 'AI/ML Engineer',
      company: 'TechCorp',
      bio: 'Leading expert in machine learning infrastructure with 8+ years of experience building scalable AI systems for enterprise applications.',
      initials: 'SC',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Full Stack Architect',
      company: 'StartupAI',
      bio: 'Specializes in modern full-stack development and helping teams build production-ready applications with cutting-edge technologies.',
      initials: 'MR',
    },
    {
      name: 'Elena Kowalski',
      role: 'Product Lead',
      company: 'InnovateLabs',
      bio: 'Drives product strategy and technical vision for AI-powered platforms, with expertise in taking AI products from prototype to scale.',
      initials: 'EK',
    },
  ];

  return (
    <section className="py-32 px-4 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 right-1/4 w-80 h-80 bg-gradient-to-b from-purple-500/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 glow-text text-center">
          Meet Your Instructors
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <div key={index} className="card-glow p-8 text-center group hover:scale-105 transition-transform duration-300">
              <div className="mb-6 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 to-cyan-500/30 rounded-full blur-2xl group-hover:blur-3xl transition-all" />
                  <Avatar className="h-32 w-32 relative bg-gradient-to-br from-indigo-500/50 to-purple-500/50 border-2 border-indigo-500/50 group-hover:border-cyan-400/70 transition-colors">
                    <AvatarFallback className="text-white font-bold text-2xl">
                      {speaker.initials}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{speaker.name}</h3>
              <p className="text-sm bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent font-semibold mb-1">{speaker.role}</p>
              <p className="text-sm text-gray-400 mb-4">{speaker.company}</p>

              <p className="text-gray-300 text-sm leading-relaxed">{speaker.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
