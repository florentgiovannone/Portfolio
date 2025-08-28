import React from 'react';
import { Container, Row, Figure, Col, Button, Image } from "react-bootstrap";
import Profile from "../assets/images/Profile.png"
import { GithubactionsPlain, LinkedinPlainWordmark } from 'devicons-react';
import { EnvelopeAt, Github } from 'react-bootstrap-icons';
import Logo2 from "../assets/images/Logo2.png"

function Footer() {
  return (
    <>
      <Container>
        <Row className="mt-5">
          <h4 className="text-center">Keep in touch</h4>
        </Row>
        <Row lg={6} className="buttons text-center justify-content-center align-items-center">
          <Col>
            <Button variant="" target="_blank" href='https://github.com/florentgiovannone'>
              <Figure>
                <Github color='#E0E0E0' size='50' />
              </Figure></Button>{' '}
          </Col>
          <Col>
            <Button variant="" target="_blank" href='https://www.linkedin.com/in/florent-giovannone/'>
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
        <Row className="justify-content-center">
          <Image className=' m-0 p-0'src={Logo2} fluid style={{height: 100, width: 100}}/>
        </Row>
      </Container>
    </>
  );
}

export default Footer;