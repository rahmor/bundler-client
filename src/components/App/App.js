import React, { useState } from 'react';
import TokenService from '../../services/token-service';
import ProviderPanel from './ProviderPanel';
import DevicesPanel from './DevicesPanel';
import AlaCarte from '../AlaCarte/AlaCarte';
import Footer from '../Footer/Footer';
import SignUp from '../Users/SignUp';
import Login from '../Users/Login';
import PrivateRoute from '../../utils/PrivateRoute';
import PublicRoute from '../../utils/PublicRoute';
import AppNavBar from '../Headers/AppNavBar';
import './App.css';

import {
  Navbar,
  NavDropdown,
  Nav,
  Button,
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import { Route, Link, Switch } from 'react-router-dom';
import { faUserCircle, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HashLink } from 'react-router-hash-link';


const App = () => {
  const [token, setToken] = useState(TokenService.hasAuthToken());

  const logOut = () => {
    TokenService.deleteToken();
    setToken(false);
  };

  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <header className='App-header'>
            <div className='App-header-hero-image'>
              <AppNavBar 
                token={token}
                setToken={setToken}
                logOut={logOut} 
              />
              <hr></hr>
              <div className='App-header-copy'>
                <Container>
                  <Row>
                    <Col>
                      <h2 className='App-header-title'>
                        Bundler is the best way to watch tv
                      </h2>
                      <p className='App-grey'>
                        Only pay for the channels you watch
                      </p>
                      <Link to='/alacarte'>
                        <Button variant='primary'>Build you plan</Button>
                      </Link>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </header>
          <main>
            <ProviderPanel />
            <DevicesPanel />
          </main>
          <Footer />
        </Route>
        <PublicRoute
          path='/login'
          token={token}
          setToken={setToken}
          logOut={logOut}
          component={Login}
        ></PublicRoute>
        <PublicRoute
          path='/signup'
          token={token}
          setToken={setToken}
          logOut={logOut}
          component={SignUp}
        ></PublicRoute>
        <PublicRoute exact path='/alacarte' component={AlaCarte}></PublicRoute>
        <PrivateRoute
          path='/alacarte/:id'
          token={token}
          setToken={setToken}
          logOut={logOut}
          component={AlaCarte}
        ></PrivateRoute>
      </Switch>
    </div>
  );
};

export default App;
