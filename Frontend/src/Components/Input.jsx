import React, { useId } from "react";

const Input = (
  { label, type = "text", className = "", style = "", children, ...props },
  ref
) => {
  const id = useId();

  return (
    <div className="w-full">
      {/* label */}
      {label && (
        <label className="inline-block mb-1 pl-1" htmlFor={id}>
          {label}
        </label>
      )}

      {/* input field */}
      <div className={`${style}`}>
        <input
          type={type}
          className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
          ref={ref}
          {...props}
          id={id}
        />

        {children && <div className="absolute top-0">{children}</div>}
      </div>
    </div>
  );
};

export default React.forwardRef(Input);
