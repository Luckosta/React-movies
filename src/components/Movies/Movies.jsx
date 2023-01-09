import Card from '../Card/Card';
import styles from './Movies.module.css';
function Movies(props) {

	const { movies } = props

	return (
		<div className={styles.movies}>
			{movies.map(card => (<Card key={card.imdbID} {...card} />))}
		</div>

	)
}

export default Movies;