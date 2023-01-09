import styles from './Main.module.css';
import cn from 'classnames';
import Movies from '../../components/Movies/Movies';
import React from 'react';
import Preloader from '../../components/Preloader/Preloader';
import Search from '../../components/Search/Search';


class Main extends React.Component {

	state = {
		movies: []
	}

	request = async () => {
		const response = await fetch('http://www.omdbapi.com/?apikey=d3861056&s=matrix')

		if (!response.ok) {
			throw new Error(response.status)
		}

		const json = await response.json()
		this.setState({ movies: json.Search })
	}

	componentDidMount() {
		this.request()
	}



	render() {

		const { movies } = this.state

		return (
			<main className={cn(styles.content, 'container')}>
				<Search />
				{
					movies.length
						? <Movies movies={movies} />
						: <Preloader />
				}
			</main>
		)
	}
}

export default Main;