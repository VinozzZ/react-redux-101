import React, {Component} from 'react';

class SearchBar extends Component{
	constructor(props) {
		super(props);
		this.state = {
			term: ''
		};
		this.onInputChange = this.onInputChange.bind(this);
	}
	render(){
		return (
			<div className="search-bar">
				<input onChange={event => this.setState({term: event.target.value})} value={this.state.term}/>
				<button onClick={e=>this.onInputChange(e)}>Submit</button>
			</div>
		)
	}

	onInputChange(e){
		e.preventDefault();
		this.props.onSearchTermChange(this.state.term)
	}
}

export default SearchBar;