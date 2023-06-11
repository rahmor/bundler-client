import React from 'react';
import './AppNavBar.css';

import { HashLink } from 'react-router-hash-link';
import {
  Navbar,
  NavDropdown,
  Nav,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { faUserCircle, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AppNavBar = ({token, setToken, logOut}) => {

  return (
    <Navbar className='App-navbar'>

      <div className='App-logo'>
        <div className='App-bars-container'>
          <NavDropdown
            title={
              <FontAwesomeIcon
                icon={faBars}
                style={{ fontSize: '1.5em', color: 'black', marginRight: '10px' }}
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
            style={{ fontSize: '2.5em', color: 'black', marginRight: '10px' }}
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
)}

export default AppNavBar;