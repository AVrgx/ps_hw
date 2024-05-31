import './Card.css';

function Card({rating, img, name }) {
	return (
		<div className="card">
			<div className="card__rating">
				<img src="/star.svg" alt="rating" />
				<p>{rating}</p>
			</div>
			<img src={img} alt="" className="card__poster" />
			<h3 className="card__header">{name}</h3>
			<div className="card__favorites">
				<img src="/favorite.svg" alt="" />
				<p>В избранное</p>
			</div>
		</div>
	);
}

export default Card;
