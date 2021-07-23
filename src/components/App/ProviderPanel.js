import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import cableproviders from '../../assets/cableproviders.png';
import cableproviderssmall from '../../assets/cableproviders-small.png';

const ProviderPanel = () => {
  return (
    <section className='App-cable-provider-panel'>
      <Container>
        <Row className='App-cable-provider-heading-container'>
          <Col>
            <h2 className='App-cable-provider-heading d-none d-lg-block d-xl-block d-xxl-block'>
              Order a custom package from your cable provider
            </h2>
            <h2 className='App-cable-provider-heading d-lg-none d-xl-none d-xxl-none'>
              Choose any provider
            </h2>
          </Col>
        </Row>
      </Container>
      <Container className='mt-3'>
        <Row>
          <Col>
            <img
              className='App-cable-images'
              srcSet={`${cableproviders} 1113w, ${cableproviderssmall} 557w`}
              alt='cable providers'
              src={cableproviders}
            ></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProviderPanel;
