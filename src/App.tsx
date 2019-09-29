import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import RestCallDemo from './components/RestCallDemo';
import About from './components/About';
import './App.css';

const App = () => (
  <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/Home/:dayIndex?' component={Home} />
    <Route path='/RestCall/:currency?' component={RestCallDemo} />
    <Route path='/About' component={About} />
  </Layout>
);

export default App;