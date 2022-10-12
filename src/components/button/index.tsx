import { ReactNode } from 'react';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import './styles.css'

export interface ButtonProps {
  children: ReactNode,
  asChild?: boolean,
}

export function Button(props: ButtonProps) {
  const {  children, asChild} = props
  const Comp = asChild? Slot : 'button'
  
  return (
    <Comp 
    className={clsx('button',)}>
      {children}
    </Comp>
  )
}
