import React, { forwardRef, useId } from "react";

function Input(
  { label, type = "text", placeholder = "", className = "", ...props },
  ref
) {
  const ID = useId();
  return (
    <>
      <div className="">
        <div>{label && <label htmlFor={ID}>{label}</label>}</div>
        <div>
          <input
            type={type}
            placeholder={placeholder}
            className={`px-5 py-3 rounded-3xl text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            {...props}
            id={ID}
            ref={ref}
          />
        </div>
      </div>
    </>
  );
}

export default forwardRef(Input);
