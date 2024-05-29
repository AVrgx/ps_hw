import './Header.css'

function Header(){
	return (
		<div className="header-wrapper">
			<div className="header container">
				<img
					src="../../../public/logo.svg"
					alt="logo"
					className="header__logo"
				/>
				<nav className="menu">
					<ul className="menu__list">
						<li className="menu__item">
							<a className='active' href="#">Поиск Фильмов</a>
						</li>
						<li className="menu__item">
							<a href='#'>Мои фильмы</a>
							<div className="item__num">0</div>
						</li>
						<li className="menu__item">
							<a href='#'>Войти</a>
							<img src="../../../public/login.svg" alt="" />
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default Header;