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
                  <a href='/about' title=''>
                    About
                  </a>
                  <ul>
                    <li>
                      <a href='/corporate' title=''>
                        Corporate
                      </a>
                    </li>
                    <li>
                      <a href='/legal' title=''>
                        Legal Notices
                      </a>
                    </li>
                    <li>
                      <a href='/terms'>Terms of Use</a>
                    </li>
                    <li>
                      <a href='/privacy-policy'>Privacy Policy</a>
                    </li>
                    <li>
                      <a href='/sponsors' title=''>
                        Sponsorship
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
                <a href='/friends' title=''>
                  Friends
                </a>
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
                <a href='/social' title=''>
                  Social
                </a>
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
