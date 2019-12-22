import React from 'react';
import {Row, Col, Container, Image} from 'react-bootstrap';
import './../Pages.css';
import Project_Single from './Project_Single';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class Projects extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  gen_projects_list(){
    var text_list, text_dict;
    [ text_list, text_dict] = this.projects_text()
    var projects_list = text_list.map((key) => {
      return (
        <Container style = {{'textAlign': 'left'}} key={Math.random()}>

         <Row style = {{'margin' : '20px'}}>
           <Col className = 'Link' style = {{'fontSize':'90%','borderRight': '4px solid orange','textAlign': 'center'}}>
             <div className = "Link" ><Link className = "Link" to = {`${this.props.match.path}/` + key}>{text_dict[key]['title']}</Link></div>

           </Col>
           <Col xs={6} style = {{'paddingBottom' : '10px', 'borderBottom': '2px solid orange',}} >
             {text_dict[key]['summary']}
           </Col>
           <Col style = {{'borderLeft': '1px solid orange'}}>
               <Image src={text_dict[key]['image']} rounded style = {{'maxWidth':'100px',
               'maxHeight':'100px', 'border' : '2px dotted orange'}}/>

           </Col>
         </Row>
       </Container>
      )
    }
    );
    return projects_list;
  }

  render(){
    return (
      <div>
        <Container><Row><Col><h1 className='Title'>Projects</h1></Col></Row></Container>
        {this.gen_projects_list()}
      </div>
    );
  }
  projects_text(){
    var text_list = [
      'machine_learning',
      'mysql_database',
      'zotbins',
      'ti_robotics',
      'iot_device_1',
      'iot_device_2',
      'renewable_energy_device',
      'processor_design_and_verification',
      'fpga_board'

    ]

    var text_dict = {
      'machine_learning' : {
        'title' : 'Machine Learning',
        'summary' : 'A research project involved with using image recognition systems to evaluate a Hydrogen refueling station capacity to fulfill an entire queue demand. For more information click here',
        'image' : 'Resources/Projects/machine_learning/brain.png',
      },
      'mysql_database' : {
        'title' : 'MySQL Database',
        'summary' : 'My project for the Summer Research Program for the research organization APEP involved creating a database + database interface for MATLAB, and more specifically their analysis software HiGRID (Holistic Grid Resource Integration and Deployment). For more information click here. ',
        'image' : 'Resources/Projects/mysql_database/data_base.png'
      },
      'zotbins' : {
        'title' : 'Zotbins',
        'summary' : 'A group project to implement a campus wide, open-source, smart waste guidance system for diverting trash from landfill, informing students about waste, and providing a useful application for UCI facilities management to identify optimal trash collection services.',
        'image' : 'Resources/Projects/zotbins/full_zotbins_logo.png'
      },
      'ti_robotics' : {
        'title' : 'TI Robotics',
        'summary' : 'Using the TI-Robotics Systems Learning Kit we developed built a robot to navigate a maze. A select group of students asked to build this robot to gauge how other students would perform if given the same kit in an electrical engineering course. For more information click here.',
        'image' : 'Resources/Projects/ti_robotics/ti.jpg'
      },
      'iot_device_1' : {
        'title' : 'IOT Device 1',
        'summary' : 'A IOT inspired project powered by a Raspberry Pi. This home automation device has 3 primary purposes. Displaying the time, gathering current weather data, and home security. By utilizing various sensors this small scale integration assists in creating a smarter home. For more information click here.',
        'image' : 'Resources/Projects/iot_device_1/iot.jpg'
      },
      'iot_device_2' : {
        'title' : 'IOT Device 2',
        'summary' : 'Switcheroo is to connect your smartphone to any typical GFCI outlet via bluetooth. The app was created in Android Studio, and activates particular channels in the circuit. The motivation of this project is to create a low cost home automation system, that is robust, and can control a wide variety of household devices. Created during hackathon. For more information click here',
        'image' : 'Resources/Projects/iot_device_2/switcheroo.png'
      },
      'renewable_energy_device' : {
        'title' : 'Renewable Energy Device',
        'summary' : 'This self adjusting solar panel, reorients itself according to the location of the incoming light to achieve maximum photovoltaic operation. The Arduino starter kit was used to achieve the 1-axial movement. Light dependent resistors were used to measure the intensity of the light to self correct the panel. For more information click here',
        'image' : 'Resources/Projects/renewable_energy_device/solar_panel.png'
      },
      'processor_design_and_verification' : {
        'title' : 'Processor Design and Verification',
        'summary' : 'Programmatically designing a processor using System Verilog. An indepth look into a basic, yet versatile processor. Implementing an instruction set and testing the instructions by running them in the verification and synthesis tool QuestaSim. For more information click here.',
        'image' : 'Resources/Projects/processor_design_and_verification/datapath.png'
      },
      'fpga_board' : {
        'title' : 'FPGA Board',
        'summary' : 'Tasked with implementing a basic four function calculator with basic assembly instructions onto a Fully Programmable Gate Array (FPGA) board. This project gives insight into the core complexities in designing a basic processor. Designed using VHDL. For more information click here.',
        'image' : 'Resources/Projects/fpga_board/fpga.png'
      }
    }
    return [text_list, text_dict]
  }
}

export default Projects;
