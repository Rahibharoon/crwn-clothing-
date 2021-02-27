import React, { Component} from 'react';
import {Route,Switch,Link} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import './App.css';

const HATSPage = (props) => {

  return( 
  <div>
<button onClick={()=> props.history.push('/topic')}>Topic</button>
    <h1>HATS Page</h1>
    </div>)
  };

 
const App = () =>{
  return (
    <div>
       <Switch> 
        <Route exact path='/'  component={HomePage}/>
        <Route exact path='/shop/hats' component={HATSPage}/> 

         </Switch> 
    </div>
  );
}
export default App;
