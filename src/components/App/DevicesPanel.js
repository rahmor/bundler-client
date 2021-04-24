import { Container, Row, Col } from 'react-bootstrap';
import {
  faAndroid,
  faWindows,
  faApple,
  faLinux,
  faRaspberryPi,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DevicesPanel = () => {
  return (
    <section className='App-devices-panel'>
      <Container fluid className='App-devices-panel-heading-container'>
        <Row>
          <Col className={'p-5'}>
            <h2 style={{ color: 'white' }}>
              Watch Bundler on just about any device
            </h2>
            <h3>
              At home or on the go, just about any device or operating system
            </h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <FontAwesomeIcon
              icon={faAndroid}
              className={'fa-5x App-devices-icons'}
            />
            <p>Android</p>
          </Col>

          <Col>
            <FontAwesomeIcon
              icon={faApple}
              className={'fa-5x App-devices-icons'}
            />
            <p>Apple</p>
          </Col>
          <Col>
            <FontAwesomeIcon
              icon={faWindows}
              className={'fa-5x App-devices-icons'}
            />
            <p>Window</p>
          </Col>
          <Col>
            <FontAwesomeIcon
              icon={faLinux}
              className={'fa-5x App-devices-icons'}
            />
            <p>Linux</p>
          </Col>
          <Col>
            <FontAwesomeIcon
              icon={faRaspberryPi}
              className={'fa-5x App-devices-icons'}
            />
            <p>Raspberry Pi</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DevicesPanel;
