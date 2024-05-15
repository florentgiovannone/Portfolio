import { Card, Container, Row, Col, Figure, Button } from 'react-bootstrap';
import { GithubactionsPlain, LinkedinOriginal, LinkedinPlain } from 'devicons-react';
import { EnvelopeAt, Github } from 'react-bootstrap-icons';
// import Hero from "../assets/images/Hero.jpeg"

function Hero () {
    return (
        <Container fluid className=' hero d-flex align-items-end'>
            <Container fluid>
                <Row xs={8} xxl={8}>
                    <Col>
                        <h1>Hi. I'm Flo.</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={8} xxl={8}>
                        <h2 >A Junior Software engineer, with a passion for problem-solving and a commitment to continuous learning</h2>
                    </Col>
                </Row>

                <Row xs={6} md={2} xxl={2}>
                    <Col className='logo-hero text-center' xs={3} md={2} xxl={1}>
                        <Button  variant="" href='https://github.com/florentgiovannone'>
                            <Figure >
                                <Github color='#E0E0E0' size='50' />
                            </Figure>
                        </Button>{' '}
                    </Col>
                    <Col className='text-center' xs={3} md={2} xxl={1}>
                        <Button variant="" href='https://www.linkedin.com/in/florent-giovannone/'>
                            <Figure>
                                <LinkedinPlain color='#E0E0E0' size='50' />
                            </Figure>
                        </Button>{' '}
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Hero;