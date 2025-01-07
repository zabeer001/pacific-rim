import React from "react";

// Define prop types for FormInput
interface FormInputProps {
  id: string;
  label: string;
  required: boolean;
  type?: string;
}

// Functional component with props destructuring
export const FormInput: React.FC<FormInputProps> = ({
  id,
  label,
  required,
  type = "text",
}) => {
  return (
    <div className="flex flex-col w-full max-md:max-w-full">
      <label htmlFor={id} className="text-left text-black">
        {label}
        {required && <span className="text-red-600"> *</span>}
      </label>
      <input
        type={type}
        id={id}
        required={required}
        className="flex gap-2.5 py-4 mt-2 w-full rounded-lg border border-solid border-zinc-400 min-h-[51px] max-md:max-w-full text-black"
        aria-required={required}
      />
    </div>
  );
};
