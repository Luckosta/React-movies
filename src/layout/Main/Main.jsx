import styles from './Main.module.css';
import cn from 'classnames';
import Movies from '../../components/Movies/Movies';
import React from 'react';
import Preloader from '../../components/Preloader/Preloader';
import Search from '../../components/Search/Search';
import NotFound from '../../components/NotFound/NotFound';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
   state = {
      movies: [],
   };

   searchMovies = async (str, type = 'all') => {
      const response = await fetch(
         `http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
            type !== 'all' ? `&type=${type}` : ''
         }`
      );
      if (!response.ok) {
         throw new Error(response.status);
      }
      const json = await response.json();
      this.setState({ movies: json.Search });
   };

   request = async () => {
      const response = await fetch(
         `http://www.omdbapi.com/?apikey=${API_KEY}&s=killer`
      );
      if (!response.ok) {
         throw new Error(response.status);
      }

      const json = await response.json();
      this.setState({ movies: json.Search });
   };

   componentDidMount() {
      this.request();
   }

   render() {
      const { movies } = this.state;

      return (
         <main className={cn(styles.content, 'container')}>
            <Search searchMovies={this.searchMovies} />
            {movies === undefined ? (
               <NotFound />
            ) : movies.length ? (
               <Movies movies={movies} />
            ) : (
               <Preloader />
            )}
         </main>
      );
   }
}

export default Main;
