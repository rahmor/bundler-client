import React from 'react';
import { useState } from 'react';
import AuthApiService from '../../services/auth-api-services';
import TokenService from '../../services/token-service';
import LoggedOutHeader from '../Headers/AppHeader';
import Footer from '../Footer/Footer';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import _ from 'lodash';
import './Users.css';

const SignUp = ({ history, setToken }) => {
  const [error, setError] = useState(null);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { email, password } = evt.target;
    AuthApiService.registerService(email.value, password.value)
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
      .catch((err) => console.log(err.message));
  };

  return (
    <div className='Users'>
      <LoggedOutHeader />
      <h1 className='text-center font-weight-bold'>REGISTER WITH BUNDLER</h1>
      <Container className='Users-border Users-form mt-5 mb-5'>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  required
                  type='email'
                  name='email'
                  placeholder='Enter email'
                />
              </Form.Group>
              <Form.Group controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type='password'
                  name='password'
                  placeholder='Password'
                />
              </Form.Group>
              <Form.Group className='text-center'>
                <Button className='m-auto' variant='primary' type='submit'>
                  Register
                </Button>
              </Form.Group>
              {error && (
                <p className='text-center text-danger'>
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

export default SignUp;
