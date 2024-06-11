import styles from './Search.module.css';
import Button from '../Button/Button';
import Input from '../Input/Input';

function Search({ children }) {
	const handleClick=()=>{
		console.log('click')
	}

	return (
		<div className="search-wrapper">
			<div className={`${styles.search} container`}>
				{children}
				<Input className={styles['search-icon']} text="Введите название" />
				<Button className={styles["searchButton"]} text="Искать" onClick={handleClick}></Button>
			</div>
		</div>
	);
}

export default Search;
