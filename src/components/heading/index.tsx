import { ReactNode } from 'react';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import './styles.css'

export interface HeadingProps {
  size?: 'sm' | 'md' | 'lg',
  children: ReactNode,
  asChild?: boolean,
}

export function Heading(props: HeadingProps) {
  const { size = 'md', children, asChild} = props
  const Comp = asChild? Slot : 'h2'
  
  return (
    <Comp 
    className={clsx('heading',
    {
      'text-lg': size === 'sm',
      'text-xl': size === 'md',
      'text-2xl': size === 'lg',
    }
    )}
    >
      {children}
    </Comp>
  )
}
