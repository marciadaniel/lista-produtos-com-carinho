function Button({ className = "", children, ...rest }) {
  let color = rest.id === rest.active ? "bg-orange-600" : "bg-white";

  const baseClass =
    "border-2 p-1 rounded-full flex  gap-2 text-sm font-semibold min-w-[150px] justify-center " + color;

  return (
    <button className={`${baseClass} ${className}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;
