import React from 'react';
import '../App.css';
import '../bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default class Books extends React.Component {

  state = {
    books: []
  }

  componentDidMount(){
    fetch('https://the-one-api.herokuapp.com/v1/book', {
      method: 'get',
      headers: new Headers({
        'Authorization': 'Bearer g2u79CE-nI4ztEVaooLG'
      })
     })
     .then(response => response.json())
     .then(books => {
       this.setState({ books: books.docs });
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
          <h2>Books</h2>
          <br />
          {this.state.books.map(function(book, index){
            return (
              <p key={book._id}>{book.name}</p>
            )
          })}
          </Col>
        </Row>
      </Container>
    );
  }
}
