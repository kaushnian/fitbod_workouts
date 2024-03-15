import { InputHTMLAttributes } from 'react';

export type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
};

export default function TextInput({ ...props }: TextInputProps) {
  return (
    <div className="flex gap-x-2 items-center">
      <label htmlFor={props.name}>{props.label}</label>

      <input
        id={props.name}
        {...props}
        className="border border-black rounded-xl h-[35px] px-2 w-[72px]"
      />
    </div>
  );
}
