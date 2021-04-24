import { Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Headers.css';
import '../App/App.css';

const LoggedOutHeader = () => {
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
        <NavDropdown.Item>
          <Link to='/login'>Login</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to='/signup'>Sign Up</Link>
        </NavDropdown.Item>
      </NavDropdown>
      <Link to='/'>
        <h1 className='App-title'>Bundler</h1>
      </Link>
    </Navbar>
  );
};

export default LoggedOutHeader;
