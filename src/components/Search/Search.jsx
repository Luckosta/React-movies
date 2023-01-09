
import React from 'react';
import styles from './Search.module.css';
import cn from 'classnames';

class Search extends React.Component {


	state = {
		search: ''
	}


	render() {
		const { search } = this.state

		return (
			<div className="row">
					<input
						className={cn(styles, "validate")}
						placeholder='Search Movie'
						id="email"
						type="search"
						value={search}
						onChange={(e) => this.setState({ search: e.target.value })}
					/>
				
			</div>
		)
	}
}

export default Search;