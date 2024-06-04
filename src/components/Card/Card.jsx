import styles from'./Card.module.css';

function Card({rating, img, name }) {
	return (
		<div className={styles["card"]}>
			<div className={styles["card__rating"]}>
				<img src="/star.svg" alt="rating" />
				<p>{rating}</p>
			</div>
			<img src={img} alt="" className={styles["card__poster"]} />
			<h3 className={styles["card__header"]}>{name}</h3>
			<div className={styles["card__favorites"]}>
				<img src="/favorite.svg" alt="" />
				<p>В избранное</p>
			</div>
		</div>
	);
}

export default Card;
