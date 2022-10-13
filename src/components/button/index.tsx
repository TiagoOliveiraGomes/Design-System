import { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import './styles.css'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode,
  asChild?: boolean,
}

export function Button({ children, asChild, className, ...props }: ButtonProps) {
  // const {  children, asChild, className} = props
  const Comp = asChild? Slot : 'button'
  
  return (
    <Comp 
    className={clsx('button',className,)}
    {...props}
    >
      {children}
    </Comp>
  )
}