import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#252839' }}>
      <Container className='pt-5'>
        <Row>
          <Col>
            <div>
              <ul>
                <li>
                  <p >
                    About
                  </p>
                  <ul>
                    <li>
                      <a href='/' title=''>
                        Corporate
                      </a>
                    </li>
                    <li>
                      <a href='/' title=''>
                        Legal Notices
                      </a>
                    </li>
                    <li>
                      <a href='/'>Terms of Use</a>
                    </li>
                    <li>
                      <a href='/'>Privacy Policy</a>
                    </li>
                    <li>
                      <a href='/' title=''>
                        Sponsors
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </Col>
          <Col>
            <ul>
              <li>
                <p>
                  Friends
                </p>
                <ul>
                  <li>
                    <a
                      href='https://rahmor.github.io/rahim-portfolio/'
                      title=''
                    >
                      Rahim
                    </a>
                  </li>
                  <li>
                    <a href='http://apple.com/' title=''>
                      Apple
                    </a>
                  </li>
                  <li>
                    <a href='https://roku.com/' title=''>
                      Roku
                    </a>
                  </li>
                  <li>
                    <a href='https://raspberrypi.org' title=''>
                      Raspberry Pi
                    </a>
                  </li>
                  <li>
                    <a href='https://linux.org/' title=''>
                      Linux
                    </a>
                  </li>
                  <li>
                    <a href='http://www.microsoft.com/' title=''>
                      Windows
                    </a>
                  </li>
                  <li>
                    <a href='http://amazon.com/' title=''>
                      Amazon Fire Stick
                    </a>
                  </li>
                  <li>
                    <a href='http://www.themoviedb.org/' title=''>
                      Android
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li>
                <p >
                  Social
                </p>
                <ul>
                  <li>
                    <a href='https://www.facebook.com' title=''>
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href='https://twitter.com' title=''>
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href='http://www.youtube.com/' title=''>
                      Youtube
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
