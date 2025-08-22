import React from "react";

const SelectInput = ({
  label,
  options,
  value,
  onChange,
  name,
  required = false,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block font-semibold">
        {label}:
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded-lg"
        required={required}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
