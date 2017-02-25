import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import NotFound from './NotFound';
import './index.css';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="Home" component={Home}/>
      <Route path="About" component={About}/>
      <Route path="Contact" component={Contact}/>
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
), document.getElementById('root'));
