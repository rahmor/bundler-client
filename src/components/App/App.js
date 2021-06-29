import { useState } from 'react';
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
  Button,
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import { Route, Link, Switch } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';
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
            <div className='App-hero-image'>
              <Navbar className='App-navbar'>
                <NavDropdown
                  title={
                    <FontAwesomeIcon
                      icon={faBars}
                      style={{ fontSize: '2.5em', color: 'white' }}
                      data-testid='hamburger-menu'
                    />
                  }
                >
                  {token ? (
                    <NavDropdown.Item>
                      <Link onClick={logOut} to='/'>
                        Log Out
                      </Link>
                    </NavDropdown.Item>
                  ) : (
                    <>
                      <NavDropdown.Item>
                        <Link to='/login'>Log In</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to='/signup'>Sign Up</Link>
                      </NavDropdown.Item>
                    </>
                  )}
                </NavDropdown>
                <Link to='/'>
                  <h1 className='App-title'>Bundler</h1>
                </Link>
              </Navbar>
              <div className='App-header-copy'>
                <Container>
                  <Row>
                    <Col>
                      <h2 className='App-header-title'>
                        Bundler is the best way to watch television
                      </h2>
                      <p className='App-grey'>
                        Pay for only the channels you want
                      </p>
                      <Link to='/alacarte'>
                        <Button variant='primary'>Browse Channels</Button>
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
