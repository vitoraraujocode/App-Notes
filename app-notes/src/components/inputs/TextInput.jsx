import React from "react";

const TextInput = ({ label, value, onChange, name, required = false }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block font-semibold">
        {label}:
      </label>
      <select
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded-lg"
      >
        <option value="High">🔴 High</option>
        <option value="Medium">🟠 Medium</option>
        <option value="Low">🟢 Low</option>
      </select>
    </div>
  );
};

export default TextInput;
