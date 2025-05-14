function Button({ className = "", children, ...rest }) {
  let color = rest.id === rest.active ? "bg-orange-600" : "bg-white";

  const baseClass =
    "border-2 p-2 rounded-full flex items-center gap-2 font-semibold " + color;

  return (
    <button className={`${baseClass} ${className}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;
