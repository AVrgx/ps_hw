import './Search.css';
import Button from '../Button/Button';
import Input from '../Input/Input';

function Search({ children }) {
	const handleClick=()=>{
		console.log('click')
	}

	return (
		<div className="search-wrapper">
			<div className="search container">
				{children}
				<Input className='search-icon' text="Введите название" />
				<Button className="searchButton" text="Искать" onClick={handleClick}></Button>
			</div>
		</div>
	);
}

export default Search;
