import React from 'react';
import '../App.css';
import '../bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default class Movies extends React.Component {

  state = {
    movies: []
  }

  componentDidMount(){
    fetch('https://the-one-api.herokuapp.com/v1/movie', {
      method: 'get',
      headers: new Headers({
        'Authorization': 'Bearer g2u79CE-nI4ztEVaooLG'
      })
     })
     .then(response => response.json())
     .then(movies => {
       this.setState({ movies: movies.docs });
     });
  }

  render(){
    return (
      <Container className="books">
        <header className="header">
          <Row className="site-title">
            <Col>
              <Link to="/" style={{color: '#fff'}}>
                <i className="fas fa-3x fa-ring" style={{color: '#fb0'}}></i>
                <br />
                The Lord of the Rings Wiki
              </Link>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link to="/">
                <Button>
                  <i className="fas fa-arrow-left"></i> Back
                </Button>
              </Link>
            </Col>
          </Row>
        </header>
        <Row>
          <Col>
          <h2>Movies</h2>
          <br />
          {this.state.movies.map(function(movie, index){
            return (
              <Link to={`/movie/${movie._id}`} key={movie._id}>
                <p>{movie.name}</p>
              </Link>
            )
          })}
          </Col>
        </Row>
      </Container>
    );
  }
}
