function FieldSet({ className = "", children }) {
  return (
    <div className={`${className} flex flex-col gap-2 mb-5`}>{children}</div>
  );
}

function Label({ className = "", children, htmlFor }) {
  return (
    <label className={`${className} text-sm font-medium`} htmlFor={htmlFor}>
      {children}
    </label>
  );
}

function Input({
  className = "",
  type,
  id = "",
  name = "",
  value = "",
  placeholder = "",
  onChange,
}) {
  return (
    <input
      className={`${className} border rounded-md py-2 px-2 w-full text-sm border-gray-300 tracking-tight`}
      id={id}
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export { Label, Input, FieldSet };
