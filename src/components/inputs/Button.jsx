const Button = (props) => {
  return <button onClick={props.onClick} className={`${props.className} border rounded-md px-3 py-2 text-sm font-medium`}>{props.children}</button>
}

export default Button;