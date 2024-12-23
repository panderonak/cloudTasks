import React, { forwardRef, useId } from "react";

function Input(
  { label, type = "text", placeholder = "", className = "", ...props },
  ref
) {
  const ID = useId();
  return (
    <>
      <div className="">
        <div className="mb-5">{label && <label htmlFor={ID}></label>}</div>
        <div>
          <input
            type={type}
            placeholder={placeholder}
            className={`sm:px-7 px-4 sm:py-5 py-3 rounded-lg outline-none duration-200 w-full ${className}`}
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
