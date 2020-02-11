import React from 'react';
import {Row, Col, Container, Image, Card, Button} from 'react-bootstrap';
import GitHubIcon from '@material-ui/icons/GitHub';
import './../Pages.css';

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  getUserInfo(){

  }
  /*Component Did Mount : Get the Github Repo*/
  abortController = new AbortController()
  componentDidMount() {

      fetch('https://api.github.com/users/diegotorres1', {signal : this.abortController.signal})
        .then(response => response.json())
        .then(data => this.setState({ data }));
  }
  componentWillUnmount(){
    this.abortController.abort()
  }
  render(){
    /*Default Values, Fetch real values later*/
    var repos_num = 12;
    var gists_num = 0;
    var followers_num = 1;

      if(this.state.data){
        console.log(this.state.data['name'])
        repos_num = this.state.data['public_repos']
        gists_num = this.state.data['public_gists']
        followers_num = this.state.data['followers']
      }
    return (
      <div>
        <br></br>
        <Container style = {{'marginBottom' : '5%'}}>
            <Row >
              <Col />
              <Col >
                  <Image style = {{'textAlign' : 'center'}} src="Resources/my_photo_temp.png" roundedCircle />
              </Col>
              <Col />
            </Row>
            <Row>
              <Col>
                <h1 className = "Title">Diego Torres</h1>
                <h4 style = {{'textAlign' :'center'}}>Computer Engineer</h4>
                <p style = {{'textAlign' :'center'}}>Coder, Engineer, and CG Hobbiest</p>
              </Col>
            </Row>
          <Row className = "Home_content">
            <Col className = "col_stretch">
              <Card className = "card_stretch">
                <Card.Img variant="top" />
                <Card.Body>
                  <Card.Title>Who Am I</Card.Title>
                  <Card.Text>
                    I enjoy coding for both my work and side projects, enjoying the rigor of solving problems and seeing real world results.
                  </Card.Text>
                  <Button className = "home_content_button" block href = "/about"  variant="dark">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className = "col_stretch" xs = {3}>
              <Card className = "card_stretch">
                <Card.Img variant="top" />
                <Card.Body>
                  <Card.Title style = {{'textAlign' :'center'}}><GitHubIcon style = {{'marginRight' : '20px'}}/>Github</Card.Title>
                  <Card.Text>
                    <Container >
                      <Row>
                        <Col className = 'github-separator' xs = {4}>{repos_num}</Col>
                        <Col>repos</Col>
                      </Row>
                      <Row>
                        <Col className = 'github-separator' xs = {4}>{gists_num}</Col>
                        <Col>gists</Col>
                      </Row>
                      <Row>
                        <Col className = 'github-separator'  xs = {4}>{followers_num}</Col>
                        <Col>followers</Col>
                      </Row>
                    </Container>
                  </Card.Text>
                  <Button className = "home_content_button" variant="dark" block href = "https://github.com/diegotorres1" target="_blank">github : diegotorres1</Button>
                </Card.Body>
              </Card>

            </Col>
            <Col className = "col_stretch" xs = {3} >
                <Card className = "card_stretch">
                  <Card.Img variant="top" />
                  <Card.Body>
                    <Card.Title>Latest Project</Card.Title>
                    <Card.Text>
                      <i>Zotbins</i> , a smart waste guidance system, helps optimize environmental campus wide trash responsibilities.
                    </Card.Text>
                    <Button className = "home_content_button" block variant="dark" href = 'http://localhost:3000/projects/zotbins'>Find out more</Button>
                  </Card.Body>
                </Card>
            </Col>
          </Row>
        </Container>
      </div>

    );
  }
}
export default Home;
