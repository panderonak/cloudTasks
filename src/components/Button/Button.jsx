function Button({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <div>
      <button
        className={`px-4 py-2 rounded-3xl ${className} ${bgColor} ${textColor}`}
        {...props}
        type={type}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
