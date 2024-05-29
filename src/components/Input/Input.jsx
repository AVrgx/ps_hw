import './Input.css'

const Input =({text, className})=>{
	return (
		<>
		<input className={`input ${className}`} placeholder={text} type="text" />
		</>
	);
}

export default Input