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
    movie: []
  }

  componentDidMount(){
    const movieId = this.props.match.params.id;
    fetch(`https://the-one-api.herokuapp.com/v1/movie/${movieId}`, {
      method: 'get',
      headers: new Headers({
        'Authorization': 'Bearer g2u79CE-nI4ztEVaooLG'
      })
     })
     .then(response => response.json())
     .then(movie => {
       this.setState({ movie: movie });
       console.log(movie);
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
              <Link to="/movies">
                <Button>
                  <i className="fas fa-arrow-left"></i> Back
                </Button>
              </Link>
            </Col>
          </Row>
        </header>
        <Row>
          <Col>
          <br />
          <h2>{this.state.movie.name}</h2>
          <br />
          <p>Academy Award Nominations: {this.state.movie.academyAwardNominations}</p>
          <p>Academy Award Wins: {this.state.movie.academyAwardWins}</p>
          <p>Box Office Revenue: ${this.state.movie.boxOfficeRevenueInMillions} Million</p>
          <p>Budget: ${this.state.movie.budgetInMillions} Million</p>
          <p>Runtime: {this.state.movie.runtimeInMinutes} Minutes</p>
          </Col>
        </Row>
      </Container>
    );
  }
}
