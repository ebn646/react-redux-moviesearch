//1.container needs to be able to call an action creator
//2.we must bind fetchSearchResults as a property to this containers//3.
//3.hookup fetchSearchResults to searchbar mapDispatchToProps
//4.by combiniing action creator fetchSearchResults to dispatch and mapping it to props
//gives us access to this.props.fetchSearchResults inside of our components

import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSearchResults } from '../actions/index';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {term: ''};

    //bind form callback functions or js errow will be thrown
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    this.setState({term:event.target.value});
  }

  onFormSubmit(event){
    event.preventDefault();
    this.setState({term:event.target.value});

    //we need to fetch movie data
    //call actiion creator every time user submits a form
    
    this.props.fetchSearchResults(this.state.term);
    this.setState({ term:'' })
  }

  render(){
    return(
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Search for a movie"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch){
  //fetchWeather calls action creator and dispatch makes sure it flows through reducers
  return bindActionCreators({fetchSearchResults}, dispatch)
}
//pass null in connect because we dont care about state here and mapDispatchToProps is always sent in as second argument
export default connect(null,mapDispatchToProps)(SearchBar);
