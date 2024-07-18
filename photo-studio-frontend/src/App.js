import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Gallery from './components/Gallery';
import UploadForm from './components/UploadForm';
import AppointmentScheduler from './components/AppointmentScheduler';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/upload" component={UploadForm} />
          <Route path="/appointments" component={AppointmentScheduler} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
