import React, { useState, useEffect } from 'react';
import LoggedOutHeader from '../Headers/AppHeader';
import { Navbar, Container, Row, Col, Form } from 'react-bootstrap';
import Channels from '../Channels/Channels';
import AuthApiService from '../../services/auth-api-services';
import './AlaCarte.css';

const AlaCarte = ({ token, setToken }) => {
  const [total, setTotal] = useState(0);
  const [userChannels, setUserChannels] = useState({});
  const [apiChannels, setApiChannels] = useState();
  const premium = 5;
  const standard = 3;
  const value = 1;

  useEffect(() => {
    AuthApiService.channelsService().then((res) => {
      setApiChannels(res.channels);
    });
  }, []);

  const addChannel = (evt, tier) => {
    const newChannel = evt.target.value;
    evt.target.value = '';

    setUserChannels((prevState) => {
      if (prevState.hasOwnProperty(newChannel)) {
        return prevState;
      } else if (newChannel === '') {
        return prevState;
      } else {
        return { ...prevState, [newChannel]: tier };
      }
    });
    setTotal((prevState) => prevState + tier);
  };

  const removeChannel = (icon) => {
    const price = userChannels[icon];

    setTotal((prevState) => {
      return prevState - price;
    });

    setUserChannels((prevState) => {
      delete prevState[icon];
      return prevState;
    });
  };

  return (
    <>
      <LoggedOutHeader token={token} setToken={setToken} />
      <Navbar
        bg='dark'
        variant='dark'
        className='d-flex justify-content-between'
      >
        <Navbar.Brand>Channels</Navbar.Brand>
        <Navbar.Text>${total}</Navbar.Text>
      </Navbar>

      <hr className='AlaCarte-hr m-0 border-0'></hr>
      <main>
        <Form className='AlaCarte-form'>
          <Container>
            <Row md={3}>
              <Col>
                <Form.Group controlId='Premium'>
                  <Form.Label>Premium</Form.Label>
                  <Form.Control
                    as='select'
                    onChange={(evt) => addChannel(evt, premium)}
                  >
                    <option></option>
                    {apiChannels === undefined ? (
                      <option></option>
                    ) : (
                      apiChannels
                        .filter((channel) => {
                          return channel.tier === 'Premium';
                        })
                        .map((channel) => (
                          <option key={channel.id}>{channel.channel}</option>
                        ))
                    )}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId='Standard'>
                  <Form.Label>Standard</Form.Label>
                  <Form.Control
                    as='select'
                    onChange={(evt) => addChannel(evt, standard)}
                  >
                    <option></option>
                    {apiChannels === undefined ? (
                      <option></option>
                    ) : (
                      apiChannels
                        .filter((channel) => {
                          return channel.tier === 'Standard';
                        })
                        .map((channel) => (
                          <option key={channel.id}>{channel.channel}</option>
                        ))
                    )}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId='Value'>
                  <Form.Label>Value</Form.Label>
                  <Form.Control
                    as='select'
                    onChange={(evt) => addChannel(evt, value)}
                  >
                    <option></option>
                    {apiChannels === undefined ? (
                      <option></option>
                    ) : (
                      apiChannels
                        .filter((channel) => {
                          return channel.tier === 'Value';
                        })
                        .map((channel) => (
                          <option id={channel.id} key={channel.id}>
                            {channel.channel}
                          </option>
                        ))
                    )}
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
          </Container>
        </Form>
        <section className='AlaCarte-channels'>
          <div>
            {total === 0 && <h3>You have no channels</h3>}
            <Container>
              <Row>
                {Object.keys(userChannels).map((channel, idx) => {
                  /* apiChannels is an array of objects.  I need to get object
                  that has channel prop from array */
                  //create helper method, for each object in array, if each.channel = chanenel
                  //return each.address and pass into component
                  let address;
                  apiChannels.forEach((apiChannel) => {
                    if (apiChannel.channel === channel) {
                      address = apiChannel.address;
                    }
                  });
                  return (
                    <Col md={3} sm={6} xl={2} key={idx}>
                      <Channels
                        removeChannel={() => removeChannel(channel)}
                        icon={channel}
                        address={address}
                      ></Channels>
                    </Col>
                  );
                })}
              </Row>
            </Container>
          </div>
        </section>
      </main>
    </>
  );
};

export default AlaCarte;
