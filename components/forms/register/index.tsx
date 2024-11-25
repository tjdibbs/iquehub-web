'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { PROGRAMMES } from '@/lib/constants';
import { registerSchema } from '@/lib/zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';

type FormSchema = z.infer<typeof registerSchema>;

const RegisterForm = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      programme: '',
      schedule: '',
    },
  });

  const onSubmit = (values: FormSchema) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='mx-auto w-[95%] max-w-md space-y-6'
      >
        <h2 className='text-xl font-semibold text-custom-darkBlue max-lg:text-center lg:text-2xl'>
          One last step, let’s get to know you
        </h2>
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
          <FormField
            control={form.control}
            name='firstName'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type='text' placeholder='First Name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='lastName'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type='text' placeholder='Last Name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
          <FormField
            control={form.control}
            name='schedule'
            render={({ field }) => (
              <FormItem>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Choose a Schedule' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='weekday'>Weekday class</SelectItem>
                    <SelectItem value='weekend'>Weekend class</SelectItem>
                    <SelectItem value='online'>Online class</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='programme'
            render={({ field }) => (
              <FormItem>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Choose a Programme' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {PROGRAMMES.map(val => (
                      <SelectItem value={val.title} key={val.slug}>
                        {val.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type='email' placeholder='Email Address' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='phoneNumber'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type='tel' placeholder='Phone Number' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          type='submit'
          className='w-full hover:text-custom-darkBlue hover:shadow'
        >
          Register
        </Button>
      </form>
    </Form>
  );
};
export default RegisterForm;
