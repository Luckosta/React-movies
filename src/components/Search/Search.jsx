import React from 'react';
import styles from './Search.module.css';
import cn from 'classnames';

class Search extends React.Component {
   state = {
      search: '',
      type: 'all',
   };

   handleKey = (event) => {
      if (event.key === 'Enter') {
         this.props.searchMovies(this.state.search, this.state.type);
      }
   };

   handleTypeChoose = (event) => {
      this.setState(
         () => ({ type: event.target.dataset.type }),
         () => {
            this.props.searchMovies(this.state.search, this.state.type);
         }
      );
   };

   render() {
      const { search, type } = this.state;

      return (
         <div className={cn(styles.form, 'row')}>
            <input
               onKeyDown={this.handleKey}
               className={cn(styles, 'validate')}
               placeholder='Search Movie'
               id='email'
               type='search'
               value={search}
               onChange={(e) => this.setState({ search: e.target.value })}
            />

            <div className={styles.radio}>
               <label>
                  <input
                     className='with-gap'
                     name='type'
                     type='radio'
                     data-type='all'
                     onChange={this.handleTypeChoose}
                     checked={this.state.type === 'all'}
                  />
                  <span>All</span>
               </label>
               <label>
                  <input
                     className='with-gap'
                     name='type'
                     type='radio'
                     data-type='movie'
                     onChange={this.handleTypeChoose}
                     checked={this.state.type === 'movie'}
                  />
                  <span>Movies</span>
               </label>
               <label>
                  <input
                     className='with-gap'
                     name='type'
                     type='radio'
                     data-type='series'
                     onChange={this.handleTypeChoose}
                     checked={this.state.type === 'series'}
                  />
                  <span>Series</span>
               </label>
            </div>

            <button
               onClick={() => this.props.searchMovies(search, type)}
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
}

export default Search;
