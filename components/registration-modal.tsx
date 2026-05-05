'use client';

import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { X } from 'lucide-react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (formData: FormData, uniqueId: string) => void;
}

interface FormData {
  name: string;
  email: string;
  phone?: string;
  college?: string;
}

export default function RegistrationModal({
  isOpen,
  onClose,
  onSuccess,
}: RegistrationModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    college: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const data = await response.json();
      onSuccess(formData, data.uniqueId);
      setFormData({ name: '', email: '', phone: '', college: '' });
    } catch (error) {
      console.error('Registration error:', error);
      setErrors({ name: 'Registration failed. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setFormData({ name: '', email: '', phone: '', college: '' });
    setErrors({});
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="glass rounded-3xl max-w-md border-indigo-500/30 shadow-2xl">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6 pt-2">
          <div>
            <h2 className="text-3xl font-bold glow-text">Register Now</h2>
            <p className="text-gray-400 text-sm mt-2">
              Secure your spot at the workshop
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-300 text-sm font-semibold">
                Full Name *
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-white/5 border-indigo-500/30 text-white placeholder:text-gray-500 focus:border-cyan-500/50 focus:ring-cyan-500/20 rounded-xl transition-all"
                disabled={isSubmitting}
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-300 text-sm font-semibold">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-white/5 border-indigo-500/30 text-white placeholder:text-gray-500 focus:border-cyan-500/50 focus:ring-cyan-500/20 rounded-xl transition-all"
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-gray-300 text-sm font-semibold">
                Phone Number (Optional)
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 (555) 123-4567"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-white/5 border-indigo-500/30 text-white placeholder:text-gray-500 focus:border-cyan-500/50 focus:ring-cyan-500/20 rounded-xl transition-all"
                disabled={isSubmitting}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="college" className="text-gray-300 text-sm font-semibold">
                College/Department (Optional)
              </Label>
              <Input
                id="college"
                type="text"
                placeholder="e.g., Computer Science"
                value={formData.college}
                onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                className="bg-white/5 border-indigo-500/30 text-white placeholder:text-gray-500 focus:border-cyan-500/50 focus:ring-cyan-500/20 rounded-xl transition-all"
                disabled={isSubmitting}
              />
            </div>

            <div className="flex gap-3 pt-6">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="glow-button flex-1"
              >
                {isSubmitting ? 'Registering...' : 'Register'}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                disabled={isSubmitting}
                className="px-6 border-indigo-500/30 text-gray-300 hover:bg-white/5 hover:border-indigo-500/50 transition-all rounded-xl"
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
