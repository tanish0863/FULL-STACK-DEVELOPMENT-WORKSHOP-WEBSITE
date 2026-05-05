'use client';

import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

interface HeroSectionProps {
  onRegisterClick: () => void;
}

export default function HeroSection({ onRegisterClick }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient" />
      
      {/* Animated glowing orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-indigo-500/30 via-purple-500/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-500/20 via-cyan-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-indigo-500/30 hover:border-indigo-500/50 transition-colors">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold text-cyan-400">June 15, 2026 • NYC & Online</span>
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight text-balance glow-text tracking-tight">
          AI & Full Stack Workshop
        </h1>

        <p className="text-lg md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto text-balance font-light leading-relaxed">
          Master cutting-edge AI and full-stack development with industry experts. An immersive one-day experience for developers serious about innovation.
        </p>

        {/* 3D Tilt Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-3xl mx-auto">
          <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} speed={400}>
            <div className="card-glow p-6 h-full">
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-2">June 15</div>
              <div className="text-gray-400 text-sm">Saturday, 2026</div>
            </div>
          </Tilt>
          <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} speed={400}>
            <div className="card-glow p-6 h-full">
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-2">9:00 AM</div>
              <div className="text-gray-400 text-sm">Full Day • 8 Hours</div>
            </div>
          </Tilt>
          <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} speed={400}>
            <div className="card-glow p-6 h-full">
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-2">Hybrid</div>
              <div className="text-gray-400 text-sm">In-Person & Online</div>
            </div>
          </Tilt>
        </div>

        <Button
          onClick={onRegisterClick}
          size="lg"
          className="glow-button px-10 py-7 text-lg"
        >
          Register Now
        </Button>
      </div>
    </section>
  );
}
