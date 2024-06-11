import { useContext, useRef } from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import styles from './LoginForm.module.css'
import { Context } from '../../context/user.context';


function LoginForm({name, setName}) {
	const { userId, setUserId } = useContext(Context);
	const onLogin = (e) => {
		e.preventDefault();

		if (!name.trim()) {
			alert("Пожалуйста, введите ваше имя.");
			return;
		}

		const profile = {
			name: name,

		};

		const profiles = JSON.parse(localStorage.getItem('profiles')) || [];


		if (!profiles.find(profile => profile.name === name)) {
			profiles.push(profile);
			localStorage.setItem('profiles', JSON.stringify(profiles));
			//localStorage.setItem('activeUser', JSON.stringify({ name: name }));
			setUserId(name)
		} else { localStorage.setItem('activeUser', JSON.stringify({ name: name })); }
		setName('')
		//setUserLogin(true);

	};

	
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