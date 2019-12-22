import React from 'react';
import Project_Generator from './../Components/Projects/Project_Generator';
import {p_list, p_data} from './../Components/Projects/Project_Data';
import './../Pages.css';

class Project_Single extends React.Component{
  constructor(props){
    super(props);
    console.log('Constructor : Project_Single')
    this.state = {

    }
  }
  componentDidMount() {
  window.scrollTo(0, 0)
}
  /*
  render(){
    return (
      <h2>ASSSS</h2>
    )
  }
  */

  render(){
    console.log('Project Single')
    console.log(this.props.match.params)
    const project_key = this.props.match.params.handle
    return (
      <div>
      <Project_Generator
        project_key = {project_key}
        project_data = {p_data}
        project_data_list = {p_list}
        />
      </div>
    );
  }

}
export default Project_Single;
