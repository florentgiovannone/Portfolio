import { Container, Row, Figure, Col, Button } from "react-bootstrap";
import Profile from "../assets/images/Profile.png"
import { GithubactionsPlain, LinkedinPlainWordmark } from 'devicons-react';
import { EnvelopeAt, Github } from 'react-bootstrap-icons';

function Footer() {
  return (
    <>
      <Container>
        <Row className="mt-5">
          <h4 className="text-center">Keep in touch</h4>
        </Row>
        <Row lg={6} className="buttons text-center justify-content-center align-items-center">
          <Col>
            <Button variant="" href='https://github.com/florentgiovannone'>
              <Figure>
                <Github color='#E0E0E0' size='50' />
              </Figure></Button>{' '}
          </Col>
          <Col>
            <Button variant="" href='https://www.linkedin.com/in/florent-giovannone/'>
              <Figure>
                <LinkedinPlainWordmark color='#E0E0E0' size='90' />
              </Figure>
            </Button>{' '}
          </Col>
          <Col>
            <Button variant="" href='mailto:giovannoneflorent@gmail.com'>
              <Figure>
                <EnvelopeAt color='#E0E0E0' size='50' />
              </Figure></Button>{' '}
          </Col>
        </Row>
        <Row >
            <p className="text-center" >&copy; Florent Givannone</p>
        </Row>
      </Container>
    </>
  );
}

export default Footer;