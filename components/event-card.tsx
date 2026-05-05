'use client';

import { Button } from '@/components/ui/button';
import { Download, Check, RotateCw } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import html2canvas from 'html2canvas';
import QRCodeComponent from '@/components/qr-code';

interface EventCardProps {
  participantName: string;
  uniqueId: string;
}

export default function EventCard({ participantName, uniqueId }: EventCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isFlipped, setIsFlipped] = useState(false);

  const downloadCard = async () => {
    if (!cardRef.current) return;

    try {
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: '#0f172a',
        scale: 2,
        logging: false,
        useCORS: true,
        allowTaint: true,
      });

      const link = document.createElement('a');
      link.download = `workshop-card-${uniqueId}.png`;
      link.href = canvas.toDataURL();
      link.click();
    } catch (error) {
      console.error('Failed to download card:', error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="relative w-full max-w-md mx-auto" style={{ perspective: 1000 }}>
        {/* Card glow background */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 via-purple-500/20 to-cyan-500/30 rounded-3xl blur-2xl" />
        
        <motion.div
          className="relative w-full h-[500px]"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Front of card */}
          <div
            ref={cardRef}
            className="absolute inset-0 glass rounded-3xl p-8 border-indigo-500/50 overflow-hidden group backface-hidden"
            style={{ backfaceVisibility: 'hidden' }}
          >
            {/* Holographic shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-white/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 pointer-events-none"
              animate={{ x: 0 }}
              transition={{ duration: 0.6 }}
            />
            
            <div className="relative h-full flex flex-col justify-between">
              {/* Header */}
              <div className="border-b border-indigo-500/30 pb-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400" />
                  <h3 className="text-xs font-mono tracking-widest uppercase text-cyan-400">
                    Verified Entry Pass
                  </h3>
                </div>
                <h2 className="text-4xl font-black glow-text">
                  Workshop 2026
                </h2>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">
                    Participant Name
                  </p>
                  <p className="text-3xl font-bold text-white">{participantName}</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">
                    Event Details
                  </p>
                  <p className="text-white font-semibold">
                    AI & Full Stack Workshop 2026
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">
                      Date
                    </p>
                    <p className="text-lg font-bold text-cyan-300">June 15, 2026</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">
                      Time
                    </p>
                    <p className="text-lg font-bold text-cyan-300">9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Footer with ID */}
              <div className="border-t border-indigo-500/30 pt-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm font-bold bg-gradient-to-r from-indigo-300 to-cyan-300 bg-clip-text text-transparent">
                    CONFIRMED
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-indigo-500/30">
                  <p className="text-xs text-gray-400">Reference ID</p>
                  <p className="text-sm font-mono text-cyan-400 font-semibold">{uniqueId}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Back of card - QR Code Side */}
          <div 
            className="absolute inset-0 glass rounded-3xl px-8 py-12 border-indigo-500/50 overflow-hidden bg-gradient-to-br from-blue-500/30 via-indigo-500/20 to-cyan-500/20 min-h-96 flex flex-col justify-between items-center backface-hidden"
            style={{ 
              transform: 'rotateY(180deg)',
              backfaceVisibility: 'hidden'
            }}
          >
            {/* Top section */}
            <div className="text-center space-y-2">
              <p className="text-sm text-gray-300 font-light">Your digital event pass is ready</p>
            </div>

            {/* Center - QR Code */}
            <div className="flex flex-col items-center justify-center space-y-6 flex-1">
              <h3 className="text-3xl font-bold text-white tracking-tight">EVENT Pass</h3>
              
              {/* QR Code with white rounded background */}
              <div className="bg-white rounded-3xl p-6 shadow-2xl">
                <QRCodeComponent value={uniqueId} size={200} />
              </div>
            </div>

            {/* Bottom section - Reference ID */}
            <div className="text-center space-y-2 w-full">
              <p className="text-xs text-gray-400 font-semibold tracking-widest uppercase">Reference ID</p>
              <p className="text-lg font-mono text-cyan-300 font-bold break-all px-2">{uniqueId}</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex gap-3">
        <Button
          onClick={() => setIsFlipped(!isFlipped)}
          variant="outline"
          className="flex-1 border-indigo-500/30 text-gray-300 hover:bg-white/5 rounded-xl gap-2"
        >
          <RotateCw className="w-5 h-5" />
          {isFlipped ? 'View Front' : 'View Back'}
        </Button>
        <Button
          onClick={downloadCard}
          className="glow-button flex-1 gap-2"
        >
          <Download className="w-5 h-5" />
          Download Your Pass
        </Button>
      </div>
    </div>
  );
}
