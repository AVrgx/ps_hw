import './CardList.css';
import Card from '../Card/Card';

function CardList({ films }) {
	return (
		<div className="cardList container">
			{films.map((film) => (
				<Card
					key={film.id}
					rating={film.rating}
					name={film.name}
					img={film.img}
				/>
			))}
		</div>
	);
}

export default CardList;
