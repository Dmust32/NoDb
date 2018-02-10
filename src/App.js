import React, { Component } from 'react';
import './App.css';
import Newsletter from './components/Newsletter';
import RandomPic from './components/Random-Pic';
// import CommentButton from './components/CommentButton';



class App extends Component {
  render() {
    return (
  <div>
    <div className = "news">   
      <h1>#ClownSquad</h1>
      < Newsletter />
    </div>

    <div className = "randomPic">
      < RandomPic />
    </div> 
    
  </div>
    );
  }
}

export default App;
