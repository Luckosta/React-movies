import React, { useState } from 'react';
import styles from './Search.module.css';
import cn from 'classnames';

function Search({ searchMovies = Function.prototype }) {
   const [search, setSearch] = useState('');
   const [type, setType] = useState('all');

   const handleKey = (event) => {
      if (event.key === 'Enter') {
         searchMovies(search, type);
      }
   };

   const handleTypeChoose = (event) => {
      setType(event.target.dataset.type);
		searchMovies(search, event.target.dataset.type);
   };


   return (
      <div className={cn(styles.form, 'row')}>
         <input
            onKeyDown={handleKey}
            className={cn(styles, 'validate')}
            placeholder='Search Movie'
            id='email'
            type='search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
         />

         <div className={styles.radio}>
            <label>
               <input
                  className='with-gap'
                  name='type'
                  type='radio'
                  data-type='all'
                  onChange={handleTypeChoose}
                  checked={type === 'all'}
               />
               <span>All</span>
            </label>
            <label>
               <input
                  className='with-gap'
                  name='type'
                  type='radio'
                  data-type='movie'
                  onChange={handleTypeChoose}
                  checked={type === 'movie'}
               />
               <span>Movies</span>
            </label>
            <label>
               <input
                  className='with-gap'
                  name='type'
                  type='radio'
                  data-type='series'
                  onChange={handleTypeChoose}
                  checked={type === 'series'}
               />
               <span>Series</span>
            </label>
         </div>

         <button
            onClick={() => searchMovies(search, type)}
            className={cn(
               styles.search__btn,
               'waves-effect waves-light btn-small '
            )}
         >
            Search
         </button>
      </div>
   );
}

export default Search;
