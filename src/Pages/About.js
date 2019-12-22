import React from 'react';
import {Row, Col, Container, Nav, Card, Button, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../Pages.css';
class About extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return (
      <Container>
        <h1 class = "Title">About</h1>

  <Row>
    <Col xs ={2}>


        <Navbar sticky="top" variant = "Link">
          <Container>
              <Nav defaultActiveKey="/home" className="flex-column">
                <Card style = {{'margin' : '0px','padding' : '0px'}}>
            <Card.Header></Card.Header>
                <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link className="Link" href="#Who-Am-I">Who Am I</Nav.Link>
            <Nav.Link className = "Link" href="#University-Extra-Academic-Activities">University Extra-Academic Activities</Nav.Link>
            <Nav.Link className = "Link" href="#University-Clubs">University Clubs</Nav.Link>
            <Nav.Link className = "Link" href="#Individual-Research">Individual Research</Nav.Link>
          </Nav>
          </Card>
            </Nav>
          </Container>
        </Navbar>

    </Col>
    <Col>{this.get_text()}</Col>
  </Row>
</Container>

    );
  }
  get_text(){
    return (
      <div>
      <h3 id = "Who-Am-I">Who Am I</h3>
      <p> I am a student of the University of California Irvine. I am an avid pursuer of knowledge and enjoy spending my time learning something new and experiencing the world in new ways. From a young age I also had a morbid curiosity for the mechanisms behind technology. From these early stages I had always known that engineering was an innate feature of myself. And along the way, from my early childhood roots to teenage youth, I had shifted between Aerospace, Computer, and Mechanical Engineering. I finally settled towards computers. They really began fascinating me, with the start of my first programming class, occuring my senior year of high school. I had always loved computers but a new world was exposed to me when the backdoor of most modern technologies was shown to me. From there, I chose to pursue a degree in Computer Engineering, and plan to explore the world with a computer at the heart of my ability to transform it.</p>

      <div className = "about-breaks" ></div>

      <h3 id = "University-Extra-Academic-Activities">University Extra-Academic Activities</h3>
      <h4>A.P.E.P Research</h4>
      <p>The Advanced Power and Energy Program addresses the development and deployment of efficient, environmentally sensitive, sustainable power generation and energy conversion worldwide. I worked under the Sustainable Energy and the Sustainable Transportation Sector. Find out more about what our goals here (http://www.apep.uci.edu/AboutTheCenter/default.aspx). My time with APEP consisted of multiple research projects, and one central research project. It also consisted of performing smaller programming tasks every now and then. The organization recently started accepting applicants who are not undergraduate mechanical engineers. New undergraduate positions called for programmers. By showing our efficiency it increased their demand for more undergraduate programmers.
      </p>
      <h5>Projects</h5>
      <ul>
        <li>
          HiGRID Database
          <p>My central research project, involved interfacing MATLAB to MySQL to create an efficient tool for calling retrieving data for their electric-grid analysis tool, HiGRID. More information can be found here. </p>
        </li>
        <li>
          PowerTrain and Performance Analysis
          <p>Finding the relationship between design parameters and car performance for different types of vehicle to attain corollary information on consumer car specification purchasing preferences.  More information can be found here.</p>
        </li>
        <li>
          Machine Learning for Increased Spatial Resolution
          <p>Increasing the spatial resolution from google maps to optimize the collection of forestry biomass, the distribution of road side collection locations and the distribution of the biomass conversion plants. More information can be found here.</p>
        </li>
      </ul>

      <h4>IEEE Eta Kappa Nu</h4>
      <blockquote>“IEEE-Eta Kappa Nu (IEEE-HKN) is the honor society of IEEE.  It promotes excellence in the profession and in education with ideals of Scholarship, Character, and Attitude.It was founded on 28 October 1904 for students of electrical engineering.  Today, IEEE-HKN promotes professional accomplishment, service, and development for students and professionals in electrical engineering, computer engineering, and other IEEE fields of interest.”</blockquote>
      <br />
      Membership (From : 3/14/18, To : Lifetime)
      <br />
      <strong>Position</strong>
      <p>Social Chair  - Coordinated the professional and social events between existing members and incoming initiates. The layout for my events is to attract new members by showing them the additional benefits you can receive by joining a highly networked community. I also felt it was my personal responsibility to make sure that the UCI EECS community was stronger as a whole. </p>

      <h4>Tau Beta Pi</h4>
      <blockquote>Tau Beta Pi is the only engineering honor society representing the entire engineering profession. It is the nation's second-oldest honor society, founded at Lehigh University in 1885 to mark in a fitting manner those who have conferred honor upon their Alma Mater by distinguished scholarship and exemplary character as students in engineering, or by their attainments as alumni in the field of engineering, and to foster a spirit of liberal culture in engineering colleges.</blockquote>

      Membership (From : 6/1/19, To : Lifetime)



      <div className = "about-breaks" ></div>




      <h3 id = "University-Clubs">University Clubs</h3>
      <h4>Orangineers</h4>
      <p>A community outreach program to help expose high school students to the world of engineering by providing them with a curriculum to develop their own circuits and code. Our goal is to make sure that students that attend under resourced technological schools can have the same opportunities that students in well financed schools receive. We are trying to remove the disparity between these schools, and make sure that all schools are able to get access to computer science and electrical engineering programs. </p>
      <h5>Responsibilities</h5>
      <p>
        <ul>
          <li>Helped create Orangineer Website. Created the design and implmeneted using Wordpress.</li>
          <li>
            Taught Courses
            <ul>
              <li>RC</li>
              Taught at Los Amigos High School, Fountain Valley, From : 4/10/18, To : 6/14/18
            </ul>
          </li>
        </ul>
      </p>


      <h4>Zotbins</h4>
      <p>The ZotBins System is an ongoing project with a team of 11 people. Zotbins is deployed in various locations (i.e. buildings, college campuses, cities) that can accurately measure and record the amount of waste in each bin. The main purpose of this project is to help keep communities clean, make waste management more efficient, and encourage the practice of zero waste (diverting waste away from landfill). I worked on the hardware for the project focusing specifically on the weighing system and testing the various sensors that were to be implemented on the bins. I would also assist in communicating the results of the sensors to the entire team and writing down documentation to account for the technical aspects of the sensor which served the purpose of informing the hardware team, and creating a tutorial style documentation if the sensor were to be included in the final open-source Zotbins Assembly Manual.</p>
      Membership (From : 4/10/19, To : 8/2/19)
      <br />
      <strong>Position</strong>
      <p>Hardware Sensors Engineer - Focused on determining the proper system for taking weight measurements, and distance measurements for finding the fullness levels of a bin. </p>


      <div className = "about-breaks" ></div>

      <h3 id = "Individual-Research">Individual Research</h3>
      <h5>Personal Electronics</h5>
      Position - Team Coordinator
      <ul><li>Organized the groups of people assigned to different parts of the projects. </li></ul>
      Research Advisor - Professor Henry P. Lee
      <ul>
        <h5>Quarterly Topics</h5>
        <li>Fall
          <ul>
            <li>MOSFET and BJT - Studied transistors before we formally saw the topic in a proper course. Performed weekly reports on our analysis using the Analog Discovery 2 tool from Digilent with use of transistors. Documentation here. Documentation here. </li>
          </ul>
        </li>
        <li>Winter
          <ul>
            <li>Current Source - With previous quarter knowledge of transistor create and fully analyze a current source using Analog Discovery 2 tool.  Cross Verified results with PSpice simulation. Compared circuit design with other students. </li>
          </ul>
        </li>
        <li>Spring
          <ul>
            <li>TI Robotics Kit - Follow the course curriculum made by TI, to determine if the resources provided and the course itself are adequate. Based on our reactions the course could possibly be embedded in the following years Electrical Engineering 70’s series courses. Documentation here.</li>
          </ul>
        </li>
      </ul>
      <div className = "about-breaks" ></div>
      </div>


    )
  }
}
export default About;
