function Label ({className, children, htmlFor}) {
  return (
    <label className={`${className}`} htmlFor={htmlFor}>{children}</label>
  )
}

function Input ({className = "", type, id = "", name = "", value = "", placeholder = ""}) {
  return (
    <input className={`${className}`} id={id} name={name} type={type} value={value} placeholder={placeholder}/>
  )
}

export { Label, Input };