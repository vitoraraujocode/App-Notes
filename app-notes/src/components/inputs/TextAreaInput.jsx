import React from "react";

const TextAreaInput = ({ label, value, onChange, name, required = false }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block font-semibold">
        {label}:
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded-lg"
        required={required}
      ></textarea>
    </div>
  );
};

export default TextAreaInput;
