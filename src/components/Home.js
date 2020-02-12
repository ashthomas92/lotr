import React from 'react';
import '../App.css';
import '../bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container className="home">
      <header className="header">
        <Row className="site-title">
          <Col>
            <i className="fas fa-3x fa-ring" style={{color: '#fb0'}}></i>
            <br />
            The Lord of the Rings Wiki
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to="/books">
              <Button>
                <i className="fas fa-book"></i> Books
              </Button>
            </Link>
            <Link to="/movies">
              <Button>
                <i className="fas fa-video"></i> Movies
              </Button>
            </Link>
            <Link to="/characters">
              <Button>
                <i className="fas fa-users"></i> Characters
              </Button>
            </Link>
            <Link to="/quotes">
              <Button>
                <i className="fas fa-quote-right"></i> Quotes
              </Button>
            </Link>
          </Col>
        </Row>
      </header>
    </Container>
  );
}

export default Home;
