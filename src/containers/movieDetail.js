import React ,{ Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchMovie } from '../actions/index';

class MovieDetail extends Component{
  componentWillMount(){
    this.props.fetchMovie(this.props.params.id);
  }

  render(){
    console.log(this.props.movie.movie)

    if(!this.props.movie.movie){
      return <div>Loading...</div>
    }
    return(
      <div>
        <Link to={ "/" }>Back</Link>
        <div>
          <h3>{ this.props.movie.movie.title }</h3>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{ movie: state }
}

export default connect(mapStateToProps, { fetchMovie })(MovieDetail);
