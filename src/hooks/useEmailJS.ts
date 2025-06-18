import { useState } from 'react';
import emailjs from 'emailjs-com';

interface BookingData {
  name: string;
  email: string;
  phone?: string;
  course: string;
  message?: string;
}

interface EmailJSConfig {
  serviceId: string;
  templateId: string;
  userId: string;
}

export const useEmailJS = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Replace these with your actual EmailJS configuration
  const config: EmailJSConfig = {
    serviceId: 'service_xxxxxxx', // Replace with your EmailJS service ID
    templateId: 'template_xxxxxxx', // Replace with your EmailJS template ID
    userId: 'user_xxxxxxxxx' // Replace with your EmailJS user ID
  };

  const sendBookingEmail = async (bookingData: BookingData) => {
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);

    try {
      // For demo purposes, we'll simulate a successful email send
      // In production, replace this with actual EmailJS implementation:
      
      // const result = await emailjs.send(
      //   config.serviceId,
      //   config.templateId,
      //   {
      //     to_name: 'Fitness Studio Admin',
      //     from_name: bookingData.name,
      //     from_email: bookingData.email,
      //     phone: bookingData.phone || 'Not provided',
      //     course_name: bookingData.course,
      //     message: bookingData.message || 'No additional message',
      //   },
      //   config.userId
      // );

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate successful response
      console.log('Booking submitted:', bookingData);
      setIsSuccess(true);
      
    } catch (err) {
      console.error('Email send failed:', err);
      setError('Failed to send booking request. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const resetStatus = () => {
    setIsSuccess(false);
    setError(null);
  };

  return {
    sendBookingEmail,
    isLoading,
    isSuccess,
    error,
    resetStatus
  };
};