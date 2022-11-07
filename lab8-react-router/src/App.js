import './App.css';
import {BrowserRouter, Routes, Route, redirect} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import React from 'react';
import Navigation from './components/Navigation';
import Student from './components/Student';
import customHistory from './components/History';
import Redirect from './components/Redirect';
import Home from './components/Home';
import NewRoute from './components/NewRoute';
class App extends React.Component {
  render() {
  return (
    <BrowserRouter history={customHistory}>
    <div>
      <Navigation />
    <Routes>
          <Route path='/' element={<Home />} exact/>
          <Route path='/newroute' element={<NewRoute />}/>
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />}/>
          <Route element={Error} />
          <Route path='/student/:studentname/:studentno?' element={<Student />} />
          <Route path='/redirect' element={<Redirect />} />
    </Routes>
    <Redirect />
    </div>
      </BrowserRouter>
      );
}
}
export default App;
