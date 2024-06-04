import styles from'./Input.module.css'

const Input =({text, className})=>{
	return (
		<>
		<input className={`${styles.input} ${className}`} placeholder={text} type="text" />
		</>
	);
}

export default Input