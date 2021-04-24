import { useState } from 'react';
import LoggedOutHeader from '../Headers/LoggedOutHeader';
import { Navbar, Container, Row, Col, Form, Button } from 'react-bootstrap';
import data from '../../data.js';
import './AlaCarte.css';

const AlaCarte = () => {
  const [total, setTotal] = useState(0);
  const [channels, addChannels] = useState([]);

  return (
    <>
      <LoggedOutHeader />
      <Navbar
        bg='dark'
        variant='dark'
        className='d-flex justify-content-between'
      >
        <Navbar.Brand>Channels</Navbar.Brand>
        <Navbar.Text>{total}</Navbar.Text>
      </Navbar>

      <hr className='AlaCarte-hr m-0 border-0'></hr>
      <main>
        <Form className='AlaCarte-form'>
          <Container>
            <Row md={3}>
              <Col>
                <Form.Group controlId='Premium'>
                  <Form.Label>Premium</Form.Label>
                  <Form.Control as='select'>
                    <option></option>
                    {Object.keys(data.premium).map((item) => (
                      <option>{item}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId='Standard'>
                  <Form.Label>Standard</Form.Label>
                  <Form.Control as='select'>
                    <option></option>
                    {Object.keys(data.standard).map((item) => (
                      <option>{item}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId='Value'>
                  <Form.Label>Value</Form.Label>
                  <Form.Control as='select'>
                    <option></option>
                    {Object.keys(data.value).map((item) => (
                      <option>{item}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
          </Container>
        </Form>
        <section className='AlaCarte-channels'>
          <div>
            <h3>You have no channels</h3>
            {total > 0 && <Button variant='primary'>Primary</Button>}
          </div>
        </section>
      </main>
    </>
  );
};

export default AlaCarte;
