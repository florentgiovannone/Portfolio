import { Container, Row, Col, Figure, Button } from 'react-bootstrap';
import { LinkedinPlain, ReactOriginal, PythonPlain } from 'devicons-react';
import { Github } from 'react-bootstrap-icons';
import Lottie from 'lottie-react';
import reactLogo from "../assets/images/reactLogo.json"
import pythonLogo from "../assets/images/pythonLogo.json"


function Hero() {

    return <>
        <span className='anchor' id='hero' />
        <Container fluid className=' hero d-flex align-items-end'>
            <Container fluid>
                <Row xs={6} md={4}>
                    <Col xs={3} md={2} xxl={1}>
                        <ReactOriginal size="100" />
                    </Col>
                    <Col xs={3} md={2} xxl={1}>
                        <PythonPlain color='#E0E0E0' size="100" />
                    </Col>
                </Row>
                <Row xs={8} xxl={8}>
                    <Col className='pb-2'>
                        <h1 className='p-0 m-0 '>Hi there.</h1>
                        <h1>I'm Flo.</h1>
                    </Col>
                </Row>

                <Row>
                    <Col xs={8} xxl={8}>
                        <h2 >A Junior Software Engineer with a passion for problem-solving, </h2>
                        <h2 >specializing in React and Python, and committed to continuous learning and growth in the ever-evolving tech landscape.</h2>
                    </Col>
                </Row>

                <Row xs={6} md={2} xxl={2}>
                    <Col className='logo-hero text-center' xs={3} md={2} xxl={1}>
                        <Button variant="" target="_blank" href='https://github.com/florentgiovannone'>
                            <Figure >
                                <Github color='#E0E0E0' size='50' />
                            </Figure>
                        </Button>{' '}
                    </Col>
                    <Col className='text-center' xs={3} md={2} xxl={1}>
                        <Button variant="" target="_blank" href='https://www.linkedin.com/in/florent-giovannone/'>
                            <Figure>
                                <LinkedinPlain color='#E0E0E0' size='50' />
                            </Figure>
                        </Button>{' '}
                    </Col>
                </Row>

            </Container>
        </Container>
    </>;
}
export default Hero;