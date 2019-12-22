import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Pages.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import My_Header from './Components/My_Header';
import My_Footer from './Components/My_Footer';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Project_Single from './Pages/Project_Single';
import Gallery from './Pages/Gallery';
import About from './Pages/About';
import {Image} from 'react-bootstrap';


function App() {
  return (
    <div>
      <Router>
        <div className = "page-container">
            <My_Header />
            <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/projects' component={Projects} />
                  <Route path='/gallery' component={Gallery} />
                  <Route path='/about' component={About} />
                  <Route exact path={'/projects' + '/:handle'} component= {Project_Single} />

            </Switch>
            <My_Footer />
          </div>

      </Router>
    </div>
  );
}

export default App;
