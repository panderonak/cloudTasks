import { forwardRef, useId } from "react";

function TextArea(
  { label, type = "text", placeholder = "", className = "", ...props },
  ref
) {
  const ID = useId();
  return (
    <div>
      <div>{label && <label htmlFor={ID}></label>}</div>
      <textarea
        name="description"
        id="{ID}"
        placeholder={placeholder}
        className={`sm:px-7 px-4 sm:py-5 py-3 rounded-lg outline-none duration-200 w-full min-h-36 max-h-36 ${className}`}
        {...props}
        ref={ref}
      ></textarea>
    </div>
  );
}

export default forwardRef(TextArea);
