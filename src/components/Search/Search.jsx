import './Search.css'
import Button from '../Button/Button'

function Search({children}){
	return (
		<div className='search'>
			{children}
			<Button
			text = 'Найти'></Button>
		</div>
	)
}

export default Search