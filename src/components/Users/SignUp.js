import { Link } from 'react-router-dom';
import LoggedOutHeader from '../Headers/LoggedOutHeader';
import Footer from '../Footer/Footer';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './Users.css';

const SignUp = () => {
  return (
    <div className='Users'>
      <LoggedOutHeader />
      <h1 className='text-center font-weight-bold'>REGISTER WITH BUNDLER</h1>
      <Container className='Users-border Users-form mt-5 mb-5'>
        <Row>
          <Col>
            <Form>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control type='email' placeholder='Enter email' />
              </Form.Group>
              <Form.Group controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Password' />
              </Form.Group>
              <Form.Group controlId='formBasicCheckbox'>
                <Form.Check type='checkbox' label='Check me out' />
              </Form.Group>
              <Form.Group className='text-center'>
                <Link to='/alacarte'>
                  <Button className='m-auto' variant='primary' type='submit'>
                    Register
                  </Button>
                </Link>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default SignUp;
