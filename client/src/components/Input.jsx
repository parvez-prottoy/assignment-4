import React from "react";

const Input = (input) => {
  return (
    <div>
      <label
        htmlFor={input.id}
        className="block text-sm font-medium text-cls-3 mb-2"
      >
        {input.label}
      </label>

      <input
        type="text"
        id={input.id}
        name={input.name}
        className="mt-1 w-full rounded-md border border-cls-2  text-sm  p-4"
      />
    </div>
  );
};

export default Input;
