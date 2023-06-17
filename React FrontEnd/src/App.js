import React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Home from "./components/home"
import Header from "./components/header"
import Course from "./components/Course"
import {Button, Container,Row,Col} from "reactstrap";
import Allcourcees from './components/Allcourcees';
import Addcourse from './components/Addcourse';
import Menus from "./components/Menus"
import About from "./components/About"
import Contact from './components/Contact';
import {Route,Routes, BrowserRouter as Router, Link} from "react-router-dom"

function App() {

  const btnHandle=()=>{
      toast.success("this is my first message",{
        position:"top-center"

      })
  }
  return (
    <div>
    <Router>
    <ToastContainer/>
    <Container>
      <Header/>
      <Row>
        <Col md={4}>
          <Menus/>

        </Col>

        <Col md={8}>
          <Routes>
          <Route path='/' Component={Home} exact/>
          <Route path='/add-course' Component={Addcourse} exact/>
          <Route path='/view-courses' Component={Allcourcees} exact/>
          <Route path='/about' Component={About} exact/>
          <Route path='/contact' Component={Contact} exact/>

          </Routes>
        </Col>
      </Row>
    </Container>
    </Router>
    </div>

  );
}

export default App;
