import React from 'react';
import './mycss.css';
import Createquiz from './components/Createquiz';
import Physics from './components/Physics';
import Chemistry from './components/Chemistry';
import Instructions from './components/Instructions';
import Takequiz from './components/Takequiz'
import {Link,Route,BrowserRouter as Router,Switch} from 'react-router-dom';

export default class App extends React.Component{
  render(){
    return(
      <Router>
      <div className="App">
          
            <div id="header">
            <h1>Welcome to Fikshun flashcard Quiz</h1>
          </div>

          <div id="navbar">
          <b><Link to="/components/Createquiz">         
            <button type="button">
          Create a Quiz
          </button> 
          </Link></b>
            <b><Link to="/components/Physics">         
            <button type="button">
          Physics
          </button> 
          </Link></b>
          <b><Link to="/components/Chemistry">
              <button type="button">
          Chemistry
              </button>
          </Link></b>
         <b> <Link to="/components/Instructions">
              <button type="button">
          Instructions
              </button>
          </Link></b>
          <b><Link to="/components/Takequiz">         
            <button type="button">
          Take a Quiz
          </button> 
          </Link></b>
           </div>


          <div id="content">
              <Switch>
              <Route path="/components/Createquiz"> 
                  <Createquiz />
                </Route>
                <Route path="/components/Physics"> 
                  <Physics />
                </Route>  
                <Route path="/components/Chemistry"> 
                  <Chemistry />
                </Route>
                <Route path="/components/Instructions"> 
                  <Instructions />
                </Route>
                <Route path="/components/Takequiz"> 
                  <Takequiz />
                </Route>
                

              </Switch>
            

          </div>
          <div id="footer">
            <p >&copy;FikshunFlashcard2020</p>
                

              </div>

          
    </div>
    </Router>

    );
  }
}
