import styles from'./Button.module.css'

function Button({text, onClick, className}){
	return (
		<button className={`${styles.button} ${className}`} onClick={onClick}>{text}</button>

	)
}

export default Button