'use client';

import { ChevronDownIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { PROGRAMMES } from '@/lib/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const ProgrammesPopover = () => {
  const pathname = usePathname();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant='ghost'
          className={cn(
            'inline-flex items-center gap-1 text-base font-medium text-white transition-colors duration-200 hover:bg-gray-100 hover:bg-transparent uppercase hover:text-custom-beige max-lg:text-black',
            pathname.includes('programmes') && 'text-custom-beige',
          )}
        >
          Programmes
          <ChevronDownIcon className='ml-1 h-4 w-4 text-white transition-transform duration-200 group-hover:rotate-180 max-lg:text-black' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='z-[9999] w-[400px] rounded-lg border border-gray-200 bg-white p-6 shadow-lg max-sm:max-w-[90%] lg:w-[500px]'>
        <ul className='grid grid-cols-1 gap-y-4 md:grid-cols-2'>
          {PROGRAMMES.map(programme => (
            <li key={programme.title}>
              <Link
                href={`/programmes`}
                className='block space-y-2 rounded-md p-3 transition-colors duration-200 hover:bg-gray-100'
              >
                <h6 className='text-sm font-semibold text-gray-800'>
                  {programme.title}
                </h6>
                <p className='line-clamp-2 text-sm text-gray-600'>
                  {programme.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
};
export default ProgrammesPopover;
