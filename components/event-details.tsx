'use client';

import { Check } from 'lucide-react';

export default function EventDetails() {
  const highlights = [
    'Learn cutting-edge AI techniques for production applications',
    'Deep dive into modern full-stack architecture and best practices',
    'Hands-on coding workshops with real-world scenarios',
    'Network with industry leaders and fellow developers',
    'Exclusive insights into emerging technologies',
    'Comprehensive materials and lifetime access to recordings',
  ];

  return (
    <section className="py-32 px-4 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-40 left-1/4 w-80 h-80 bg-gradient-to-t from-indigo-500/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 glow-text">
          About the Workshop
        </h2>

        <p className="text-lg text-gray-300 mb-8 leading-relaxed font-light">
          This intensive workshop brings together experienced developers and AI practitioners to explore the intersection of artificial intelligence and modern full-stack development. Over the course of a full day, you&apos;ll gain practical knowledge on integrating AI into production applications, building scalable architectures, and implementing best practices that leading companies use today.
        </p>

        <p className="text-lg text-gray-300 mb-12 leading-relaxed font-light">
          Whether you&apos;re looking to advance your career, build AI-powered products, or stay ahead of the curve, this workshop provides the knowledge and connections you need.
        </p>

        <h3 className="text-3xl font-bold mb-10 bg-gradient-to-r from-indigo-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">What You&apos;ll Learn</h3>

        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((highlight, index) => (
            <div key={index} className="card-glow p-6 group">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-indigo-500/50 to-cyan-500/50 group-hover:from-indigo-500 group-hover:to-cyan-500 transition-all">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                </div>
                <p className="text-gray-200 leading-relaxed">{highlight}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
