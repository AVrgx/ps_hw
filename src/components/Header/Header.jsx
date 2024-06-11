import { useContext } from 'react';
import styles from './Header.module.css'
import { Context } from '../../context/user.context';

function Header(){
	const {userId, setUserId}=useContext(Context)
	const onLogout = (e) => {
		e.preventDefault();
		localStorage.removeItem('activeUser');
		setUserId(null)
	}

	return (
		<div className={styles["header-wrapper"]}>
			<div className={`${styles["header"]} container`}>
				<img
					src="/logo.svg"
					alt="logo"
					className="header__logo"
				/>
				<nav className={styles["menu"]}>
					<ul className={styles["menu__list"]}>
						<li className={styles["menu__item"]}>
							<a className='active' href="#">Поиск Фильмов</a>
						</li>
						<li className={styles["menu__item"]}>
							<a href='#'>Мои фильмы</a>
							<div className={styles["item__num"]}>0</div>
						</li>
						<li className={styles["menu__item"]}>
							{userId ? <>{userId}<a onClick={onLogout}href='#'>Выйти</a> </>:<a href='#'>Войти</a>}
							<img src="/login.svg" alt="" />
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default Header;