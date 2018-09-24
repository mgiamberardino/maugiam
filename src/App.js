import React, { Component } from 'react';
import logo from './logo.svg';
import personalImage from './foto_cv.jpeg';
import skype from './skype.png';
import gmail from './gmail.svg';
import linkedIn from './linkedin.svg';
import './App.css';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={personalImage} className="App-logo" alt="logo" />
          <div className="contact-container">
            <Contact logo={gmail} link="mailto:mgiamberardino@gmail.com"/>
            <Contact logo={linkedIn} link="https://ar.linkedin.com/in/mgiamberardino" />
            <Contact logo={skype} link="skype:mauro.giamberardino?add" />
          </div>
          <h1 className="App-title">Mauro Giamberardino</h1>
          <h3>MERN Full Stack Developer</h3>
        </header>
        <footer className="App-footer">
          
        </footer>
      </div>
    );
  }
}

export default App;
