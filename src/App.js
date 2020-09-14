import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Twitch from './components/Twitch'
import YouTube from './components/YouTube'
import Blog from './components/Blog'
import Default from './components/Default'
import NavList from './components/NavList'
import Bjj from './components/Bjj'

class App extends Component{
  render () {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <NavList></NavList>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/blog' component={Blog}></Route>
          <Route path='/bjj' component={Bjj}></Route>
          <Route path='/youtube' component={YouTube}></Route>
          <Route path='/twitch' component={Twitch}></Route>
          <Route component={Default}></Route>
        </Switch>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default App;
