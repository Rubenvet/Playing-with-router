import React, { Component } from 'react';
import { Route, Switch, NavLink } from "react-router-dom";

import './App.css';
import About from './About';
import Contact from './Contact';
import Dog from './Dog';

const DogLover = () => <h1> I Love Dogs </h1>

class App extends Component {

  render() {
    return (
      <div className="App">
        <nav className="App-nav">
          <NavLink exact activeClassName="active-link" to="/">
            DogLover
          </NavLink>
          <NavLink exact activeClassName="active-link" to="/dog">
            Dog
          </NavLink>
          <NavLink exact activeClassName="active-link" to="/dog/r">
            Dog(r)
          </NavLink>
          <NavLink exact activeClassName="active-link" to="/dog/c">
            Dog(c)
          </NavLink>
          <NavLink exact activeClassName="active-link" to="/about">
            About
          </NavLink>
          <NavLink exact activeClassName="active-link" to="/contact">
            Contact
          </NavLink>
        </nav>

        <Switch>
          <Route exact path="/" component={DogLover} />
          <Route exact path="/dog/c" component={() => <Dog name="muffins" />} />
          <Route exact path="/dog/r" render={() => <Dog name="Biscuit" />} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>


      </div>
    );
  }
}


{/* <Route path="/dog" element={<Dog />}/>
         <Route path="/about" element={<About />}/>
         <Route path="/contact" element={<Contact />}/>
         <Route path="/dog/lover" element={<DogLover />}/> */}

export default App;
