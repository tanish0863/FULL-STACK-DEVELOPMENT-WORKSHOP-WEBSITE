'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  college: string;
}

interface ProgressiveRegistrationProps {
  onComplete: (data: FormData, uniqueId: string) => void;
  livePreviewName?: string;
}

export default function ProgressiveRegistration({ onComplete, livePreviewName }: ProgressiveRegistrationProps) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    college: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const steps = [
    {
      title: 'What\'s your name?',
      field: 'name',
      placeholder: 'e.g., Sarah Chen',
      type: 'text',
    },
    {
      title: 'What\'s your email?',
      field: 'email',
      placeholder: 'you@example.com',
      type: 'email',
    },
    {
      title: 'Phone (optional)',
      field: 'phone',
      placeholder: '+1 (555) 123-4567',
      type: 'tel',
      optional: true,
    },
    {
      title: 'Your college/department',
      field: 'college',
      placeholder: 'e.g., Computer Science',
      type: 'text',
      optional: true,
    },
  ];

  const validateField = (field: string, value: string) => {
    const newErrors = { ...errors };

    if (field === 'name' && !value.trim()) {
      newErrors.name = 'Name is required';
    } else if (field === 'email') {
      if (!value.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        newErrors.email = 'Please enter a valid email';
      } else {
        delete newErrors.email;
      }
    } else if (field === 'name') {
      delete newErrors.name;
    } else {
      delete newErrors[field];
    }

    setErrors(newErrors);
    return !newErrors[field];
  };

  const handleNext = () => {
    const currentField = steps[step].field;
    const fieldValue = formData[currentField as keyof FormData];

    if (validateField(currentField, fieldValue)) {
      if (step < steps.length - 1) {
        setStep(step + 1);
      } else {
        handleSubmit();
      }
    }
  };

  const handlePrevious = () => {
    if (step > 0) {
      setStep(step - 1);
      setErrors({});
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleNext();
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Registration failed');
      const data = await response.json();
      onComplete(formData, data.uniqueId);
    } catch (error) {
      console.error('Registration error:', error);
      setErrors({ submit: 'Registration failed. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentStep = steps[step];
  const progress = ((step + 1) / steps.length) * 100;

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Progress bar */}
      <div className="mb-8 space-y-3">
        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        </div>
        <p className="text-xs text-gray-400 text-center">Step {step + 1} of {steps.length}</p>
      </div>

      {/* Form container */}
      <div className="glass rounded-3xl p-8 border-indigo-500/30">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Title */}
            <div>
              <h2 className="text-2xl font-bold text-white">{currentStep.title}</h2>
              {currentStep.optional && (
                <p className="text-xs text-gray-400 mt-1">Optional</p>
              )}
            </div>

            {/* Input field */}
            <div>
              <Input
                type={currentStep.type}
                placeholder={currentStep.placeholder}
                value={formData[currentStep.field as keyof FormData]}
                onChange={(e) => {
                  const newData = { ...formData, [currentStep.field]: e.target.value };
                  setFormData(newData);
                }}
                onKeyPress={handleKeyPress}
                autoFocus
                className="bg-white/5 border-indigo-500/30 text-white placeholder:text-gray-500 focus:border-cyan-500/50 focus:ring-cyan-500/20 rounded-xl text-lg py-6 transition-all"
              />
              {errors[currentStep.field] && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm mt-2"
                >
                  {errors[currentStep.field]}
                </motion.p>
              )}
            </div>

            {/* Live preview */}
            {livePreviewName && step === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                className="p-4 rounded-xl bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 border border-indigo-500/20"
              >
                <p className="text-xs text-gray-400 mb-2">Your event card preview:</p>
                <p className="text-white font-semibold">{livePreviewName || 'Your Name'}</p>
              </motion.div>
            )}

            {/* Navigation buttons */}
            <div className="flex gap-3 pt-4">
              {step > 0 && (
                <Button
                  onClick={handlePrevious}
                  variant="outline"
                  className="flex-1 border-indigo-500/30 text-gray-300 hover:bg-white/5 rounded-xl"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              )}
              <Button
                onClick={handleNext}
                disabled={isSubmitting}
                className="flex-1 glow-button rounded-xl"
              >
                {step === steps.length - 1 ? (
                  isSubmitting ? 'Registering...' : 'Complete Registration'
                ) : (
                  <>
                    Next
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
