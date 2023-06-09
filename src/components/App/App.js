import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import TokenService from '../../services/token-service';
import ProviderPanel from './ProviderPanel';
import DevicesPanel from './DevicesPanel';
import AlaCarte from '../AlaCarte/AlaCarte';
import Footer from '../Footer/Footer';
import SignUp from '../Users/SignUp';
import Login from '../Users/Login';
import PrivateRoute from '../../utils/PrivateRoute';
import PublicRoute from '../../utils/PublicRoute';

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
import './App.css';

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
              <Navbar className='App-navbar'>

                <div className='App-logo'>
                  <div class='App-bars-container'>
                    <NavDropdown
                      title={
                        <FontAwesomeIcon
                          icon={faBars}
                          style={{ fontSize: '1.5em', color: 'black', marginRight:'10px' }}
                          data-testid='user-bars'
                        />
                      }
                      >
                      <Link to='/alacarte'>
                        <h5 className='App-title'>Build Your Plan</h5>
                      </Link>
                      <HashLink to='/#App-devices-panel'>
                        <h5 className='App-title'>Devices</h5>
                      </HashLink>
                    </NavDropdown>
                  </div>

                  <Link to='/'>
                    <h1 className='App-title'>Bundler</h1>
                  </Link>
                </div>
                <Link to='/alacarte'>
                  <h5 className='App-title App-title-hidden'>Build Your Plan</h5>
                </Link>

                <HashLink to='/#App-devices-panel'>
                  <h5 className='App-title App-title-hidden'>Devices</h5>
                </HashLink>

                <NavDropdown
                className='App-user-dropdown'
                  title={
                    <FontAwesomeIcon
                      icon={faUserCircle}
                      style={{ fontSize: '2.5em', color: 'black', marginRight:'10px' }}
                      data-testid='user-circle'
                    />
                  }
                >
                  {token ? (
                    <Nav.Item>
                      <Link onClick={logOut} to='/'>
                        Log Out
                      </Link>
                    </Nav.Item>
                  ) : (
                    <>
                      <Nav.Item>
                        <Link to='/login'>Log In</Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Link to='/signup'>Sign Up</Link>
                      </Nav.Item>
                    </>
                  )}
                </NavDropdown>
              
              </Navbar>
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
          setToken={setToken}
          component={Login}
        ></PublicRoute>
        <PublicRoute
          path='/signup'
          setToken={setToken}
          component={SignUp}
        ></PublicRoute>
        <PublicRoute exact path='/alacarte' component={AlaCarte}></PublicRoute>
        <PrivateRoute
          path='/alacarte/:id'
          token={token}
          setToken={setToken}
          component={AlaCarte}
        ></PrivateRoute>
      </Switch>
    </div>
  );
};

export default App;
