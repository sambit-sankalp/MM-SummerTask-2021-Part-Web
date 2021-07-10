import React from 'react';
import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home/Newsbody';
import About from './About/AboutPage';
import Article from "./Article/ArticlesPage.jsx"; 
import SignIn from "./SignIn/SignIn";
  
function Body() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/articles' component={Article} />
        <Route path='/about' component={About} />
        <Route path='/signin' component={SignIn} />
        </Switch>
    </Router>
  );
}
  
export default Body;