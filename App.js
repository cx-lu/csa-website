import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Link, animateScroll as scroll } from "react-scroll";

class App extends React.Component {
  render() {
    return (
      <html>
        <body>
          <div className="App">

            <NavBar />
            <Home />
            <Events />
            <FamilyGroups />
            <Board />
            <Merch />
            <Footer />

          </div>
        </body>
      </html>
    );
  }
}

class NavBar extends React.Component{
  render() {
    return (
      <div className="navbar">
          <Link className="navbtn"
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >Home</Link>

          <Link className="navbtn"
            activeClass="active"
            to="events"
            spy={true}
            smooth={true}
            duration={500}
          >Events</Link>

          <Link className="navbtn"
            activeClass="active"
            to="fg"
            spy={true}
            smooth={true}
            duration={500}
          >Family Groups</Link>

          <Link className="navbtn"
            activeClass="active"
            to="board"
            spy={true}
            smooth={true}
            duration={500}
          >Board</Link>

          <Link className="navbtn"
            activeClass="active"
            to="merch"
            spy={true}
            smooth={true}
            duration={500}
          >Merch</Link>
      </div>
    );
  }
}

class Home extends React.Component{
  render() {
    return (
      <div className="home-section" id="home">
        <h1>Welcome to CSA</h1>
        <p>The Chinese Students' Association (CSA) is a social, cultural,
           and political organization that aims to promote Chinese and 
           Chinese-American affairs to the Penn community. CSA exists to 
           create a network of individuals interested in these affairs and 
           provide a way for all people to learn more about Chinese and 
           Chinese-American culture, history, food, and news while creating a 
           network with a multifaceted family of members.  To carry out our 
           mission, CSA holds numerous events including our annual cultural 
           show production, holiday festivals, speaker events, food events, 
           trips, study breaks, and more.  </p>
      </div>
    );
  }
}

class Events extends React.Component{
  render() {
    return (
      <div className="events-section" id="events">
        <p>CSA Events</p>
      </div>
    );
  }
}

class FamilyGroups extends React.Component{
  render() {
    return (
      <div className="fg-section" id="fg">
        <p>CSA Family Groups</p>

        <p>CSA Family Group Sign Up</p>
        <Form />
      </div>
    );
  }
}

class Board extends React.Component{
  render() {
    return (
      <div className="board-section" id="board">
        <p>CSA Board</p>
      </div>
    );
  }
}

class Merch extends React.Component{
  render() {
    return (
      <div className="merch-section" id="merch">
        <p>CSA Merch</p>
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-section">
        <p>This is the footer.</p>
      </div>
    );
  }
}

class Form extends React.Component{
  state = {
    name: '',
    email: '',
    hometown: '',
    preference: '',
    bigLittle: '',
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form>
        <input 
          name="name"
          placeholder="Name"
          autoComplete="off" 
          value = {this.state.name} 
          onChange={e => this.change(e)}
        />
        <br />
        <input 
          name="email"
          placeholder="Email"
          autoComplete="off"  
          value = {this.state.email} 
          onChange={e => this.change(e)}
        />
        <br />
        <input 
          name="hometown"
          placeholder="Hometown"
          autoComplete="off"  
          value = {this.state.hometown} 
          onChange={e => this.change(e)}
        />
        <br />
        <input 
          name="preference"
          placeholder="Preference"
          autoComplete="off"  
          value = {this.state.preference} 
          onChange={e => this.change(e)}
        />
        <br />
        <input 
          name="bigLittle"
          placeholder="Big / Little"
          autoComplete="off"  
          value = {this.state.bigLittle} 
          onChange={e => this.change(e)}
        />
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    )
  }
}
export default App; 
