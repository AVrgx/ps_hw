import { forwardRef } from 'react';
import styles from './Input.module.css'

const Input = forwardRef(function Input({ className, text, onChange, ...props }, ref) {
	return (
		<>
			<input onChange={onChange} className={`${styles.input} ${className}`} placeholder={text} {...props}type="text" />
		</>
	);
}
)
export default Input