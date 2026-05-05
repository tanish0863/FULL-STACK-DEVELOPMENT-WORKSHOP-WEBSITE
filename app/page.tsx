'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster, toast } from 'sonner';
import HeroSection from '@/components/hero-section';
import EventDetails from '@/components/event-details';
import SpeakerSection from '@/components/speaker-section';
import ScheduleSection from '@/components/schedule-section';
import ProgressiveRegistration from '@/components/progressive-registration';
import SuccessScreen from '@/components/success-screen';
import Footer from '@/components/footer';
import { X } from 'lucide-react';

interface RegistrationData {
  name: string;
  email: string;
  phone?: string;
  college?: string;
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [registrationData, setRegistrationData] = useState<RegistrationData | null>(
    null
  );
  const [uniqueId, setUniqueId] = useState('');

  const handleRegistrationSuccess = (formData: RegistrationData, id: string) => {
    setUniqueId(id);
    setRegistrationData(formData);
    setIsModalOpen(false);

    // Show success toast
    toast.success(`Welcome ${formData.name}! Your registration is confirmed.`, {
      duration: 5000,
    });
  };

  const handleRegisterAnother = () => {
    setRegistrationData(null);
    setUniqueId('');
    setIsModalOpen(true);
  };

  if (registrationData) {
    return (
      <>
        <SuccessScreen
          participantName={registrationData.name}
          email={registrationData.email}
          uniqueId={uniqueId}
          onRegisterAnother={handleRegisterAnother}
        />
        <Toaster position="top-right" />
      </>
    );
  }

  return (
    <>
      <main className="bg-background text-foreground">
        <HeroSection onRegisterClick={() => setIsModalOpen(true)} />
        <EventDetails />
        <SpeakerSection />
        <ScheduleSection />
        <Footer />
      </main>

      {/* Progressive Registration Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="relative w-full max-w-md">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute -top-10 right-0 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <ProgressiveRegistration
                  onComplete={handleRegistrationSuccess}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Toaster position="top-right" />
    </>
  );
}
