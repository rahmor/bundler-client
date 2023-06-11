import React, { useState } from 'react';
import AppNavBar from '../Headers/AppNavBar';
import AuthApiService from '../../services/auth-api-services';
import TokenService from '../../services/token-service';
import Footer from '../Footer/Footer';
import './Users.css';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import _ from 'lodash';

const Login = ({ history, setToken, token, logOut }) => {
  const [error, setError] = useState(null);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { email, password } = evt.target;
    AuthApiService.loginService(email.value, password.value)
      .then((res) => {
        email.value = '';
        password.value = '';
        if (Object.keys(res)[0] === 'error') {
          setError(res.error);
          return;
        } else if (res.authToken === undefined) {
          setError('There was an error, please try again');
          return;
        }
        TokenService.setToken(res.authToken);
        setToken(true);
        const userId = TokenService.getUserIdFromToken(res.authToken);
        history.push(`/alacarte/${userId}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='Users'>
      <AppNavBar 
        token={token}
        setToken={setToken}
        logOut={logOut} 
      />
      <h1 className='text-center font-weight-bold'>LOG IN TO BUNDLER</h1>
      <Container className='Users-border Users-form mt-5 mb-5 '>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  required
                  name='email'
                  type='email'
                  placeholder='Enter email'
                />
              </Form.Group>
              <Form.Group controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  name='password'
                  type='password'
                  placeholder='Password'
                  minLength='8'
                />
              </Form.Group>
              <Form.Group className='text-center'>
                <Button className='m-auto' variant='primary' type='submit'>
                  Log In
                </Button>
              </Form.Group>
              {error && (
                <p className='text-center text-danger' data-testid='error'>
                  {_.startCase(_.toLower(error))}
                </p>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Login;
