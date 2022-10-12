import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { clsx } from 'clsx';
import { Check } from 'phosphor-react'
import './styles.css'

export interface CheckboxProps {

}

export function Checkbox(props: CheckboxProps) {
  
  return (
    <CheckboxPrimitive.Root className='Checkbox-Root'>
        <CheckboxPrimitive.Indicator asChild>
            <Check weight='bold' className='Checkbox-Icon' />
        </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}
