/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import {AuthProvider} from '../contexts/AuthContext'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from "./Login";
import UploadImage from "./UploadImage/index";
import PrivateRoute from './PrivateRoute'
import '../components/styles.css'
import StartPage from "./StartPage";
import SelectFilter from "./SelectFilter";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";


function App() {

  return (
       
        <Router>
        <AuthProvider>
        <div className="container">
         <Header />
        <div className="main">
          <Switch>
            <Route path='/start' component={StartPage} />
            <PrivateRoute exact path='/' component={SelectFilter} />
            <PrivateRoute exact path='/result' component={UploadImage} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
          </Switch>
          </div>
        <Footer />
        </div>
        </AuthProvider>
        </Router>   

  );
}

export default App;
