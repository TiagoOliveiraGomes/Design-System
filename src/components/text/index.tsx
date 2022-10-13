import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface TextProps {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
  className?: string;
  colorText?: 'text-gray-100' | 'text-gray-400'
}

export function Text({ size = 'md', children, asChild, className, colorText='text-gray-100' }: TextProps) {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp 
      className={clsx(
        'font-sans', 
        {
          'text-xs': size === 'sm',
          'text-sm': size === 'md',
          'text-md': size === 'lg',
        },
        className,
        colorText
      )}
    >
      {children}
    </Comp>
  )
}