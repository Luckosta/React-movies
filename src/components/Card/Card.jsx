import styles from './Card.module.css';
import cn from 'classnames';
function Card(props) {

	const {
		Title: title,
		Year: year,
		imdbID: id,
		Type: type,
		Poster: poster
	} = props

	return (
		<div id={id} className={cn("card", styles.movie)}>
			<div className="card-image waves-effect waves-block waves-light">
				{
					poster === 'N/A'
						? <img
							alt=''
							className="activator"
							src={`https://via.placeholder.com/300x450?text=${title}`} />
						: <img
							alt=''
							className="activator"
							src={poster} />
				}

			</div>
			<div className="card-content">
				<span className="card-title activator grey-text text-darken-4">{title}</span>
				<p>{year} <span className='right'>{type}</span></p>
			</div>
		</div>
	)
}

export default Card;