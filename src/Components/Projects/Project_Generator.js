/*
  Description : Convert a list of project data into pages that can be served.
  Steps
    - Import data from Project_Data
    - Convert data into a Page
    - Depending on the prop passed to this Component pick the page to render
    - Data Structure

*/

import React from 'react';
import {Row, Col, Container, Image} from 'react-bootstrap';
import {p_data, p_list} from './Project_Data';
import './../../Pages.css';


class Project_Generator extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }

  data_struct(){
    return {
      'project_key' : {
        'Title' : '',
        'Definitions' : {
          'word1' : 'Meaning of the word1',
          'word2' : 'Meaning of the word2'
        },
        'Documents' : {
          'document_name' : 'sad'
        },
        'Description' : (
          <p>Description</p>
        ),
        'Details' : (
          <p>Details</p>
        ),
        'Image' : 'src_path'

      }
    }
  }

  data2render(){
    var project_key;
    var project_data_key;
    var render_data = [];
    // Check if prop exists and if key exists in data then take key, else not return empty
    if('project_key' in this.props && this.props.project_data && this.props.project_data_list && this.props.project_key in this.props.project_data){
      var project_key = this.props.project_key;
      var project_data = this.props.project_data[project_key];
      var project_data_list = this.props.project_data_list;

      for (project_data_key of project_data_list){
        var sub_data = project_data[project_data_key];
        console.log(project_data_key)
        console.log(sub_data)
        if(project_data_key === 'Title'){

          render_data.push(
            <Row>
              <Col style = {{'textAlign' : 'center'}}><h1>{sub_data}</h1>
              <div className = "about-breaks" ></div>
              </Col>

            </Row>
          )
        }
        else if(project_data_key === 'Definitions'){
          var definitions = [];
          for (var word in sub_data){
            definitions.push(
              <p><i><strong>{word}</strong> : {sub_data[word]}</i></p>
            )
          }

          render_data.push(
            <Row>
              <Col>
                <div className = "about-breaks" ></div>
             {definitions}
             </Col>
            </Row>
          );
        }
        else if(project_data_key === 'Documents'){
          var documents = [];
          for (var document_name in sub_data){
            documents.push(
              <li>
                <p><i><strong><a href = {sub_data[document_name]['document_src']} target="_blank">{document_name}</a> - </strong>{sub_data[document_name]['document_data']}</i></p>
              </li>
            )
          }
          render_data.push(
            <Row>
              <Col>
                <h3>Documents</h3>
                <ul style = {{'marginLeft' : '5%'}}>
                  {documents}
                </ul>
              </Col>
            </Row>
          );

        }
        else if(project_data_key === 'Description'){
          render_data.push(
            <Row>
              <Col >
                <h3>Description</h3>
                <div style = {{'marginLeft' : '5%'}}>
                  {sub_data}
                </div>
              </Col>
            </Row>
          );
        }
        else if(project_data_key === 'Details'){
          render_data.push(
            <Row>
              <Col>
                <h3>Details</h3>
                  <div style = {{'marginLeft' : '5%'}}>
                    {sub_data}
                  </div>
              </Col>
            </Row>
          )
        }
        else if(project_data_key === 'Image'){
          render_data.push(
            <Row>
              <Col style = {{'textAlign' : 'center'}}>
                <Image src={sub_data} rounded style = {{'maxWidth':'50%',
                 'border' : '2px dotted orange', 'marginBottom' : '5%', 'marginTop' : '5%'}}/>
              </Col>
            </Row>
          )
        }
      }

    }
    else{
      return (
        <h1>Project doesn't exist!</h1>
      )
    }
    console.log(render_data)
    return (
      <Container>
        {render_data}
        <div className = "about-breaks" ></div>
      </Container>
    )
  }

  render(){
    var a = (
      <div> ANGUS</div>
    )
    var b = (
      <div> DINGUS</div>
    )
    var c = []
    c.push(a)
    c.push(b)
    return (
      <div>
        {this.data2render()}
      </div>

    );
  }
}

export default Project_Generator;
