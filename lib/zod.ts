import { z } from 'zod';

export const heroFormSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().min(1, 'Email is required').email('Not a valid email'),
  phoneNumber: z.string().min(1, 'Phone number is required'),
});

export const contactSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  email: z.string().min(1, 'Email is required').email('Not a valid email'),
  message: z.string().min(1, 'Message is required'),
});

export const registerSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().min(1, 'Email is required').email('Not a valid email'),
  phoneNumber: z.string().min(1, 'Phone number is required'),
  schedule: z.string().min(1, 'This field is required'),
  programme: z.string().min(1, 'This field is required'),
});
