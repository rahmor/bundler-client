import React from 'react';
import TokenService from '../../services/token-service';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Headers.css';
import '../App/App.css';

const AppHeader = ({ token, setToken }) => {
  const logOut = () => {
    TokenService.deleteToken();
    setToken(false);
  };

  return (
    <Navbar className='LoggedOut-navbar'>
      <NavDropdown
        title={
          <FontAwesomeIcon
            icon={faBars}
            style={{ fontSize: '2.5em', color: 'white' }}
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
      <Link to='/'>
        <h1 className='App-title'>Bundler</h1>
      </Link>
    </Navbar>
  );
};

export default AppHeader;
