'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { PROGRAMMES } from '@/lib/constants';
import { registerSchema } from '@/lib/zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type FormSchema = z.infer<typeof registerSchema>;

const RegisterForm = () => {
  const form = useForm<FormSchema>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      schedule: '',
      programme: '',
      currentStatus: '',
      mode: '',
      source: '',
      communication: [],
      message: '',
      location: '',
    },
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (values: FormSchema) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          <FormField
            control={form.control}
            name='firstName'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    placeholder='First Name'
                    className='w-full'
                  />
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
                  <Input
                    {...field}
                    placeholder='Last Name'
                    className='w-full'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    placeholder='Email Address'
                    className='w-full'
                  />
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
                  <Input
                    {...field}
                    type='tel'
                    placeholder='Phone Number'
                    className='w-full'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name='location'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} placeholder='Location' className='w-full' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='space-y-4'>
          <h3 className='text-lg font-semibold text-primary'>
            Select Programme
          </h3>
          <FormField
            control={form.control}
            name='programme'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className='flex flex-wrap items-center gap-4'
                  >
                    {PROGRAMMES.map(programme => (
                      <FormItem
                        key={programme.slug}
                        className='flex items-center space-x-3 space-y-0'
                      >
                        <FormControl>
                          <RadioGroupItem value={programme.title} />
                        </FormControl>
                        <FormLabel className='font-normal'>
                          {programme.title}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Separator />
        <div className='space-y-4'>
          <h3 className='text-lg font-semibold text-primary'>Current Status</h3>
          <FormField
            control={form.control}
            name='currentStatus'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className='flex flex-wrap items-center gap-4'
                  >
                    {[
                      'Student',
                      'Looking for a job',
                      'Working Full-time',
                      'Changing Career',
                      'Self-Development /Further Study',
                      'Freelance / Self-Employed',
                      'Unemployed but not searching',
                    ].map(status => (
                      <FormItem
                        key={status}
                        className='flex items-center space-x-3 space-y-0'
                      >
                        <FormControl>
                          <RadioGroupItem value={status} />
                        </FormControl>
                        <FormLabel className='font-normal'>{status}</FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Separator />
        <div className='space-y-4'>
          <h3 className='text-lg font-semibold text-primary'>Preferred Time</h3>
          <FormField
            control={form.control}
            name='schedule'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className='flex flex-wrap items-center gap-4'
                  >
                    {['Weekdays', 'Saturdays (Weekends)'].map(status => (
                      <FormItem
                        key={status}
                        className='flex items-center space-x-3 space-y-0'
                      >
                        <FormControl>
                          <RadioGroupItem value={status} />
                        </FormControl>
                        <FormLabel className='font-normal'>{status}</FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Separator />
        <div className='space-y-4'>
          <h3 className='text-lg font-semibold text-primary'>Learning Mode</h3>
          <FormField
            control={form.control}
            name='mode'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className='flex flex-wrap items-center gap-4'
                  >
                    {['Physical', 'Online'].map(status => (
                      <FormItem
                        key={status}
                        className='flex items-center space-x-3 space-y-0'
                      >
                        <FormControl>
                          <RadioGroupItem value={status} />
                        </FormControl>
                        <FormLabel className='font-normal'>{status}</FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Separator />
        <div className='space-y-4'>
          <h3 className='text-lg font-semibold text-primary'>
            How did you hear about us?
          </h3>
          <FormField
            control={form.control}
            name='source'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className='flex flex-wrap items-center gap-4'
                  >
                    {[
                      'Google',
                      'Facebook',
                      'Instagram',
                      'X (Twitter)',
                      'LinkedIn',
                      'Friends/Family/Group',
                      'Others',
                    ].map(status => (
                      <FormItem
                        key={status}
                        className='flex items-center space-x-3 space-y-0'
                      >
                        <FormControl>
                          <RadioGroupItem value={status} />
                        </FormControl>
                        <FormLabel className='font-normal'>{status}</FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Separator />
        <div className='space-y-4'>
          <h3 className='text-lg font-semibold text-primary'>
            Preferred mode of Communication
          </h3>
          <FormField
            control={form.control}
            name='communication'
            render={({ field }) => (
              <FormItem className='flex flex-wrap items-center gap-4 space-y-0'>
                {['WhatsApp', 'Email', 'Call'].map(c => (
                  <FormItem
                    key={c}
                    className='flex items-center space-x-3 space-y-0'
                  >
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes(c)}
                        onCheckedChange={checked => {
                          return checked
                            ? field.onChange([...field.value, c])
                            : field.onChange(
                                field.value?.filter(value => value !== c),
                              );
                        }}
                      />
                    </FormControl>
                    <FormLabel className='font-normal'>{c}</FormLabel>
                  </FormItem>
                ))}
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Separator />
        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder='Message'
                  className='w-full'
                  rows={4}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='w-full hover:text-primary' type='submit'>
          Submit
        </Button>
      </form>
    </Form>
  );
};
export default RegisterForm;
