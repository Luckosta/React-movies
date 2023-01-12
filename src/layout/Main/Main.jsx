import styles from './Main.module.css';
import cn from 'classnames';
import Movies from '../../components/Movies/Movies';
import React, { useEffect, useState } from 'react';
import Preloader from '../../components/Preloader/Preloader';
import Search from '../../components/Search/Search';
import NotFound from '../../components/NotFound/NotFound';

function Main() {
   const [movies, setMovies] = useState([]);

   const searchMovies = async (str, type = 'all') => {
      const response = await fetch(
         `https://www.omdbapi.com/?apikey=d3861056&s=${str}${
            type !== 'all' ? `&type=${type}` : ''
         }`
      );
      if (!response.ok) {
         throw new Error(response.status);
      }
      const json = await response.json();
      setMovies(json.Search);
   };

   const request = async () => {
      const response = await fetch(
         `https://www.omdbapi.com/?apikey=d3861056&s=killer`
      );
      if (!response.ok) {
         throw new Error(response.status);
      }

      const json = await response.json();
      setMovies(json.Search);
   };

   useEffect(() => {
      request();
   }, []);

   return (
      <main className={cn(styles.content, 'container')}>
         <Search searchMovies={searchMovies} />
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

export default Main;
