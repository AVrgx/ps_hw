import { useRef } from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import styles from './LoginForm.module.css'


function LoginForm({onLogin, name, setName}) {

	
	const loginRef = useRef();

	
	const onChange = (e) => {
		setName(e.target.value);
	};

	return (
		<form className={styles.login} onSubmit={onLogin}>
			<h2 className={styles['login__header']}>Вход</h2>
			<Input id='login' value={name} ref={loginRef} onChange={onChange} className={styles.login__input} text="Ваше имя" />
			<Button className={styles.login__button} text="Войти в профиль" />
		</form>
	);
}


export default LoginForm;