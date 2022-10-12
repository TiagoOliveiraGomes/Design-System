import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import './styles.css'
import { ReactNode } from 'react';

export interface TextProps {
  size?: 'sm' | 'md' | 'lg',
  children: ReactNode,
  asChild?: boolean,
}

export function Text(props: TextProps) {
  const { size = 'md', children, asChild} = props
  const Comp = asChild? Slot : 'span'
  
  return (
    <Comp 
    className={clsx('span',
    {
      'text-xs': size === 'sm',
      'text-sm': size === 'md',
      'text-md': size === 'lg',
    }
    )}
    >
      {children}
    </Comp>
  )
}
