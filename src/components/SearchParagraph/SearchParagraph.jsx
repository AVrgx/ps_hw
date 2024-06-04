import styles from './SearchParagraph.module.css'

function SearchParagraph(){
	return (
		<p className={styles['search__paragraph']}>
			Введите название фильма, сериала или мультфильма для поиска и добавления в
			избранное.
		</p>
	);
}

export default SearchParagraph