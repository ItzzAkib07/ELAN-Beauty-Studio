import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import { Calendar, Clock, Sparkles, Send, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import Button from '../common/Button';

export default function BookingForm() {
  const [searchParams] = useSearchParams();
  const preSelectedService = searchParams.get('service') || '';

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      service: preSelectedService || 'Bridal Makeup Artistry',
      preferredDate: '',
      preferredTime: '11:00 AM',
      message: ''
    }
  });

  useEffect(() => {
    if (preSelectedService) {
      setValue('service', preSelectedService);
    }
  }, [preSelectedService, setValue]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // Check if EmailJS keys are configured in client env
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            to_name: "Sakshi Choudhry (ÉLAN Beauty Studio)",
            from_name: data.fullName.trim(),
            from_email: data.email.trim(),
            phone: data.phone.trim(),
            service: data.service,
            preferred_date: data.preferredDate,
            preferred_time: data.preferredTime,
            message: data.message ? data.message.trim() : "No additional note.",
          },
          publicKey
        );
      } else {
        // Simulated client submission when keys are not configured
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      setIsSuccess(true);
      // Trigger luxury celebration confetti
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#E5C590', '#C5A880', '#F7F3EB', '#D4AF37']
      });
      reset();
    } catch (err) {
      console.error("Booking submission error:", err);
      setErrorMessage("We encountered an issue submitting your enquiry. Please message directly on WhatsApp or call +91 74155 21971.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="glass-panel p-8 sm:p-12 rounded-sm border border-[#E5C590]/50 text-center space-y-6 shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-[#C5A880]/15 border border-[#E5C590] flex items-center justify-center mx-auto text-[#E5C590]">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold block">
          Appointment Enquiry Received
        </span>

        <h3 className="text-2xl sm:text-3xl font-serif text-[#FDFBF7]">
          Thank You for Choosing ÉLAN
        </h3>

        <p className="text-sm text-[#CFC0A8] font-light leading-relaxed max-w-md mx-auto">
          Sakshi Choudhry and the ÉLAN team will review your booking request and get in touch within 24 hours to confirm your schedule and consultation.
        </p>

        <div className="pt-4 flex justify-center">
          <Button
            onClick={() => setIsSuccess(false)}
            variant="secondary"
            size="md"
            icon={RefreshCw}
            iconPosition="left"
          >
            Submit Another Request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="glass-panel p-6 sm:p-10 rounded-sm border border-[#C5A880]/30 shadow-2xl space-y-6"
      noValidate
    >
      <div className="border-b border-[#C5A880]/15 pb-4">
        <h3 className="font-serif text-2xl text-[#FDFBF7] font-semibold">
          Reserve Your Beauty Experience
        </h3>
        <p className="text-xs text-[#CFC0A8] font-light mt-1">
          Complete the details below to request your bespoke makeup or salon consultation.
        </p>
      </div>

      {errorMessage && (
        <div className="p-4 rounded-sm bg-red-950/50 border border-red-500/40 text-red-200 text-xs flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className="block text-xs uppercase tracking-wider text-[#E5C590] font-medium mb-1.5">
          Full Name <span className="text-red-400">*</span>
        </label>
        <input
          id="fullName"
          type="text"
          placeholder="e.g. Ananya Deshmukh"
          {...register('fullName', {
            required: 'Please enter your full name',
            minLength: { value: 2, message: 'Name must be at least 2 characters' },
            maxLength: { value: 60, message: 'Name cannot exceed 60 characters' }
          })}
          className={`w-full px-4 py-3 bg-[#14100E] border rounded-sm text-sm text-[#FDFBF7] placeholder-[#736B65] focus:outline-none transition-colors ${
            errors.fullName
              ? 'border-red-500/60 focus:border-red-500'
              : 'border-[#C5A880]/30 focus:border-[#E5C590] focus:ring-1 focus:ring-[#E5C590]'
          }`}
        />
        {errors.fullName && (
          <p className="text-[11px] text-red-400 mt-1">{errors.fullName.message}</p>
        )}
      </div>

      {/* Email & Phone Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-xs uppercase tracking-wider text-[#E5C590] font-medium mb-1.5">
            Email Address <span className="text-red-400">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="ananya@example.com"
            {...register('email', {
              required: 'Please enter your email',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address format'
              }
            })}
            className={`w-full px-4 py-3 bg-[#14100E] border rounded-sm text-sm text-[#FDFBF7] placeholder-[#736B65] focus:outline-none transition-colors ${
              errors.email
                ? 'border-red-500/60 focus:border-red-500'
                : 'border-[#C5A880]/30 focus:border-[#E5C590] focus:ring-1 focus:ring-[#E5C590]'
            }`}
          />
          {errors.email && (
            <p className="text-[11px] text-red-400 mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-[#E5C590] font-medium mb-1.5">
            Phone / WhatsApp <span className="text-red-400">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="e.g. 9876543210"
            {...register('phone', {
              required: 'Please enter your phone number',
              pattern: {
                value: /^[0-9+()-\s]{8,15}$/,
                message: 'Please enter a valid phone number'
              }
            })}
            className={`w-full px-4 py-3 bg-[#14100E] border rounded-sm text-sm text-[#FDFBF7] placeholder-[#736B65] focus:outline-none transition-colors ${
              errors.phone
                ? 'border-red-500/60 focus:border-red-500'
                : 'border-[#C5A880]/30 focus:border-[#E5C590] focus:ring-1 focus:ring-[#E5C590]'
            }`}
          />
          {errors.phone && (
            <p className="text-[11px] text-red-400 mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Service Selection */}
      <div>
        <label htmlFor="service" className="block text-xs uppercase tracking-wider text-[#E5C590] font-medium mb-1.5">
          Select Service <span className="text-red-400">*</span>
        </label>
        <select
          id="service"
          {...register('service', { required: 'Please select a service' })}
          className="w-full px-4 py-3 bg-[#14100E] border border-[#C5A880]/30 rounded-sm text-sm text-[#FDFBF7] focus:outline-none focus:border-[#E5C590] focus:ring-1 focus:ring-[#E5C590] transition-colors"
        >
          <option value="Bridal Makeup Artistry">Bridal Makeup Artistry (Weddings & Receptions)</option>
          <option value="Party & Occasion Glam">Party & Occasion Glam (Sangeet, Cocktails, Engagements)</option>
          <option value="Editorial & High Fashion Artistry">Editorial & High Fashion Artistry</option>
          <option value="Professional Hair Styling">Professional Hair Styling & Draping</option>
          <option value="Bespoke Beauty Consultation">Bespoke Beauty & Skin Consultation</option>
          <option value="Salon Operations & Management Consulting">Salon Operations Consulting (For Salon Owners)</option>
        </select>
      </div>

      {/* Date & Time Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="preferredDate" className="block text-xs uppercase tracking-wider text-[#E5C590] font-medium mb-1.5">
            Preferred Date <span className="text-red-400">*</span>
          </label>
          <input
            id="preferredDate"
            type="date"
            {...register('preferredDate', { required: 'Please select a date' })}
            className={`w-full px-4 py-3 bg-[#14100E] border rounded-sm text-sm text-[#FDFBF7] focus:outline-none transition-colors ${
              errors.preferredDate
                ? 'border-red-500/60 focus:border-red-500'
                : 'border-[#C5A880]/30 focus:border-[#E5C590] focus:ring-1 focus:ring-[#E5C590]'
            }`}
          />
          {errors.preferredDate && (
            <p className="text-[11px] text-red-400 mt-1">{errors.preferredDate.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="preferredTime" className="block text-xs uppercase tracking-wider text-[#E5C590] font-medium mb-1.5">
            Preferred Time Slot
          </label>
          <select
            id="preferredTime"
            {...register('preferredTime')}
            className="w-full px-4 py-3 bg-[#14100E] border border-[#C5A880]/30 rounded-sm text-sm text-[#FDFBF7] focus:outline-none focus:border-[#E5C590] transition-colors"
          >
            <option value="09:00 AM">09:00 AM (Early Morning / Bridal)</option>
            <option value="11:00 AM">11:00 AM (Morning Slot)</option>
            <option value="02:00 PM">02:00 PM (Afternoon Slot)</option>
            <option value="04:30 PM">04:30 PM (Evening Glam)</option>
            <option value="06:30 PM">06:30 PM (Reception / Gala Slot)</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs uppercase tracking-wider text-[#E5C590] font-medium mb-1.5">
          Occasion Details / Specific Requests
        </label>
        <textarea
          id="message"
          rows={3}
          placeholder="Tell us about the venue, outfit colors, special preferences or questions..."
          {...register('message', {
            maxLength: { value: 500, message: 'Message cannot exceed 500 characters' }
          })}
          className="w-full px-4 py-3 bg-[#14100E] border border-[#C5A880]/30 rounded-sm text-sm text-[#FDFBF7] placeholder-[#736B65] focus:outline-none focus:border-[#E5C590] focus:ring-1 focus:ring-[#E5C590] transition-colors"
        />
        {errors.message && (
          <p className="text-[11px] text-red-400 mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          fullWidth
          size="lg"
          disabled={isSubmitting}
          icon={Send}
          iconPosition="right"
        >
          {isSubmitting ? 'Sending Request...' : 'Submit Booking Request'}
        </Button>
      </div>

      <p className="text-[11px] text-center text-[#A8A19A] pt-1">
        🔒 Your contact information is kept strictly confidential and used solely for appointment coordination.
      </p>
    </form>
  );
}
