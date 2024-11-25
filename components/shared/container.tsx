import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

const Container = ({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn('container mx-auto max-w-[1440px] px-4 lg:px-8', className)}
    >
      {children}
    </div>
  );
};
export default Container;
