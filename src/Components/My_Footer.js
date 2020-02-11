import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import './../Pages.css';

class Gallery extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    var email = 'email : diegotorres9799@gmail.com';
    var linkedin = 'Linkedin';
    var repository = 'Github Repository';
    return (
      <footer className="footer">
        <Container>
        <Row>
          <Col className="Link">{email}</Col>
          <Col><a href="https://www.linkedin.com/in/diego-torres-557766157" target="_blank"><div className = "Link" >{linkedin}</div></a></Col>
          <Col><a href="https://github.com/diegotorres1" target="_blank"><div className = "Link" >{repository}</div></a></Col>
        </Row>

        </Container>
      </footer>

    );
  }
}
export default Gallery;
