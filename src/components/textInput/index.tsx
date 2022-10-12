import { clsx } from "clsx";
import "./styles.css";
import { InputHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface TextInputRootProps {
  children: ReactNode,
}

function TextInputRoot(props: TextInputRootProps) {
  return <div className={"textInputRoot"}>
    {props.children}
  </div>;
}
TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIconProps {
  children: ReactNode,
}
function TextInputIcon(props: TextInputIconProps) {
  return(
    <Slot className="textInputIcon">
      {props.children}
    </Slot>
  )
}
TextInputIcon.displayName = 'TextInput.Icon'


export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}
function TextInputInput(props: TextInputInputProps) {
  return (
    <input
    className="textInput"
    {...props}
    />
    )
  }
  TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
}
