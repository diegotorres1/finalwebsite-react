import React from 'react';
import {Navbar, Nav, NavDropdown, Button, FormControl,  Form, Container} from 'react-bootstrap'
import {
  Link
} from "react-router-dom";
import './../Pages.css';
import BuildIcon from '@material-ui/icons/Build';
class My_Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  /*
  <NavDropdown id="nav-dropdown" title="Dropdown" >
    <NavDropdown.Item style = {{'margin' : '0px', 'padding' : '0px'}}>
      <Link to = "/projects" className="nav-link" style = {{'margin' : '0px', 'padding' : '0px'}}>
        <Button variant="secondary" size="sm" block style = {{'margin' : '0px', 'padding' : '0px'}}>
          Projects
        </Button>
      </Link>
    </NavDropdown.Item>
  </NavDropdown>
  */
  render(){
    return (

      <Navbar className = "header" expand="lg" >
        <Container style = {{'textAlign' : 'center'}}>
        <Link to="/"><Navbar.Brand><BuildIcon fontSize = 'large' /></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" style = {{'fontSize': '150%'}}>

            <Link to = "/" className="nav-link">Home</Link>
            <Link to = "/projects" className="nav-link">Projects</Link>
            <Link to = "/gallery" className="nav-link">Gallery</Link>
            <Link to = "/about" className="nav-link">About</Link>



          </Nav>

        </Navbar.Collapse>
        </Container>
      </Navbar>

    );
  }

}

export default My_Header;
