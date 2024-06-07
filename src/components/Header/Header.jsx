import styles from './Header.module.css'

function Header({onLogout, activeUser}){


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
							{activeUser ? <>{activeUser}<a onClick={onLogout}href='#'>Выйти</a> </>:<a href='#'>Войти</a>}
							<img src="/login.svg" alt="" />
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default Header;