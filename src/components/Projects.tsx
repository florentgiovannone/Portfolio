import { Col, Row, Image, Container, Carousel, Button, Figure, } from 'react-bootstrap';
import HeroImage from "../assets/images/Hero.png";
import ProjectOne from "../assets/images/project_1.png"
import ProjectTwo from "../assets/images/project_2.png"
import ProjectThree from "../assets/images/project_3.png"
import ProjectFour from "../assets/images/project_4.png"
import Test from "../assets/images/test.gif"
import {
    Html5Original, Css3Original, PypiOriginal,
    NpmOriginalWordmark, JavascriptOriginal,
    FlaskOriginal, ReactOriginal, PythonOriginal, ExpressOriginal, BulmaPlain, MongodbPlain, MongooseOriginal,
    PostgresqlOriginal, NetlifyOriginal, HerokuOriginal, SqlalchemyOriginal, SassOriginal, GithubOriginal
} from 'devicons-react';
import { Fade } from "react-awesome-reveal";
function Projects() {
    return <>
        <span className='anchor' id='projects'></span>
        <Container fluid className='proj hover-underline-animation-proj'>
            <Fade direction='down' delay={500} triggerOnce>
        <h3 className=' proj-title text-center p-3 '>Projects</h3>
        <Carousel>
            <Carousel.Item>
                        <Row className='carousel project'>
                        <Carousel.Caption className=' p-4 m-0  d-flex justify-content-center align-items-center'>
                                <Row className='justify-content-center'>
                                <Row className='p-0 m-0 justify-content-center align-items-center'>

                                    <Col md={6} lg={6} xl={6} xxl={6} >
                                    <h4>Star Wars - Space Invaders</h4>
                                    <h4>4 days - Solo</h4>
                                    <p>
                                            On the first project I developed a star wars themed space invader game using HTML / CSS / vanilla JavaScript. This project was 1 week long.
                                    <p>
                                                I structured the workload day by day and ensured that hours worked were accounted for.                                    </p>
                                    </p>
                                        <Row className="text-center align-items-center justify-content-center">
                                            <Col className="d-flex justify-content-center mb-3 mb-sm-0">
                                                    <Button className="btn-change1" target="_blank" href='https://github.com/florentgiovannone/SEB-Project-1/blob/main/README.md'>

                                                        <p className='m-0'>ReadMe</p>

                                                </Button>
                                            </Col>
                                            <Col className="d-flex justify-content-center mb-3 mb-sm-0">
                                                    <Button className="btn-change2" target="_blank" href='https://starwarsinvaqder.netlify.app/'>
                                                    <Figure className='m-0'>
                                                        <p className='m-0'>   Website</p>
                                                    </Figure>
                                                </Button>{' '}
                                            </Col>
                                        </Row>
                                </Col>
                                    <Col md={6} lg={6} xl={6} xxl={6} className='d-flex align-items-center justify-content-center'>
                                    <Image className="img-fluid " src={ProjectOne} fluid />
                                </Col>
                            </Row>
                                    <p className='proj-title pt-5'><strong>Tech Used</strong></p>
                            <Row xxl={6} className=' justify-content-center'>
                                <Col>
                                    <Html5Original size='40' />
                                    <p>HTML</p>
                                </Col>
                                <Col>
                                    <Css3Original size='40' />
                                    <p>CSS</p>
                                </Col>
                                <Col>
                                    <JavascriptOriginal size='40' />
                                    <p>JavaScript</p>
                                </Col>
                            </Row>
                        </Row>
                    </Carousel.Caption>
                </Row>
            </Carousel.Item> 
                    
            <Carousel.Item>
                <Row className='carousel'>
                        <Carousel.Caption className=' p-4 m-0  d-flex justify-content-center align-items-center'>
                                <Row className='justify-content-center'>
                                <Row className='p-0 m-0 project justify-content-center align-items-center'>
                                    <Col md={6} lg={6} xl={6} xxl={6} className='d-flex align-items-center justify-content-center'>
                                    <Image className="img-fluid " src={ProjectTwo} fluid />
                                </Col>
                                    <Col  md={6} lg={6} xl={6} xxl={6} >
                                    <h4>Games of thrones</h4>
                                    <h4>3 days - pair</h4>
                                    <p>
                                            On the second project I also worked as a pair. We decided to work with a game of thrones API. We decided to display everything we learned in class using React and Bulma on CSS.
                                    </p>
                                    <p>
                                            The initial React project building and component display was done as a driver and navigator team. We then shared workload equally and checked on each other throughout the day to ensure that everything was going to be delivered on time. We deployed and fixed the latest bug as driver and navigator at the end too.

                                    </p>
                                        <Row className="text-center align-items-center justify-content-center">
                                            <Col className="d-flex justify-content-center mb-3 mb-sm-0">
                                                    <Button className="btn-change1" target="_blank" href='https://github.com/florentgiovannone/SEB-Project-2/blob/main/README.MD'>
                                                    <Figure  className='m-0'>
                                                        <p className='m-0'>ReadMe</p>
                                                    </Figure>
                                                </Button>{' '}
                                            </Col>
                                            <Col className="d-flex justify-content-center mb-3 mb-sm-0">
                                                    <Button className="btn-change2" target="_blank" href='https://majestic-pegasus-01f742.netlify.app/'>
                                                    <Figure className='m-0'>
                                                        <p className='m-0'>   Website</p>
                                                    </Figure>
                                                </Button>{' '}
                                            </Col>
                                        </Row>
                                </Col>
                            </Row>
                                <p className='proj-title pt-5'><strong>Tech Used</strong></p>
                                <Row>
                                <Col className="text-center">
                                    <Html5Original size='40' />
                                    <p className="text-center">HTML
                                    </p>
                                </Col>
                                <Col className="text-center"><Css3Original size='40' />
                                    <p>CSS</p></Col>
                                <Col className="text-center"><SassOriginal size='40' />
                                    <p>Sass</p></Col>
                                <Col className="text-center"><ReactOriginal size='40' />
                                    <p>React</p></Col>
                                <Col className="text-center"><NpmOriginalWordmark size='40' />
                                    <p>NPM</p></Col>
                                <Col className="text-center"><BulmaPlain size='40' />
                                    <p>Bulma</p></Col>
                                <Col className="text-center"><NetlifyOriginal size='40' />
                                    <p>Netlify</p></Col>
                            </Row>
                        </Row>
                    </Carousel.Caption>
                </Row>
            </Carousel.Item>

            <Carousel.Item>
                <Row className='carousel '>
                        <Carousel.Caption className=' p-4 m-0  d-flex justify-content-center align-items-center'>
                                <Row className=' justify-content-center'>
                                <Row className=' p-0 m-0 justify-content-center align-items-center'>

                                    <Col md={6} lg={6} xl={6} xxl={6} >
                                    <h4>Rouge wine cave</h4>
                                    <h4>5 days - pair</h4>
                                    <p>
                                            On the third project I worked in a pair. We developed our own API using Express and MongoDB as our database. We also used React for our frontend. We built a wine dedicated app that is a cave builder where users could create an account, update account details and password.
                                    </p>
                                    <p>
                                            I took ownership of developing the whole logic for adding wines to your own cave, looking for other users and seeing other user’s caves and account details alongside the design and outlook.

                                    </p>
                                        <Row className="text-center align-items-center justify-content-center">
                                            <Col className="d-flex justify-content-center mb-3 mb-sm-0">
                                                    <Button className="btn-change1" target="_blank" href='https://github.com/florentgiovannone/SEB-Project-3-front-end/blob/main/README.md'>
                                                    <Figure className='m-0'>
                                                        <p className='m-0'>ReadMe</p>
                                                    </Figure>
                                                </Button>{' '}
                                            </Col>
                                            <Col className="d-flex justify-content-center mb-3 mb-sm-0">
                                                    <Button className="btn-change2" target="_blank" href='https://rouge-wines.netlify.app/'>
                                                    <Figure className='m-0'>
                                                        <p className='m-0'>   Website</p>
                                                    </Figure>
                                                </Button>{' '}
                                            </Col>
                                        </Row>
                                </Col>
                                    <Col md={6} lg={6} xl={6} xxl={6} className='d-flex align-items-center justify-content-center'>
                                    <Image className="img-fluid " src={ProjectThree} fluid />
                                </Col>
                            </Row>
                                <p className='proj-title pt-5'><strong>Tech Used</strong></p>
                                <Row>
                                <Col className="text-center">
                                    <Html5Original size='40' />
                                    <p className="text-center">HTML
                                    </p>
                                </Col>
                                <Col className="text-center"><Css3Original size='40' />
                                    <p>CSS</p></Col>
                                <Col className="text-center"><SassOriginal size='40' />
                                    <p>Sass</p></Col>
                                <Col className="text-center"><ReactOriginal size='40' />
                                    <p>React</p></Col>
                                <Col className="text-center"><ExpressOriginal size='40' />
                                    <p>Express</p></Col>
                                <Col className="text-center"><NpmOriginalWordmark size='40' />
                                    <p>NPM</p></Col>
                                <Col className="text-center"><BulmaPlain size='40' />
                                    <p>Bulma</p></Col>
                                <Col className="text-center"><MongodbPlain size='40' />
                                    <p>MongoDB</p></Col>
                                <Col className="text-center"><MongooseOriginal size='40' />
                                    <p>Mongoose</p></Col>
                                <Col className="text-center"><NetlifyOriginal size='40' />
                                    <p>Netlify</p></Col>
                            </Row>
                        </Row>
                    </Carousel.Caption>
                </Row>
            </Carousel.Item> 

            <Carousel.Item>
                <Row className='carousel'>
                    <Carousel.Caption className=' p-4 m-0 d-flex justify-content-center align-items-center'>
                                <Row className=' justify-content-center'>
                                <Row  className='p-0 m-0 project justify-content-center align-items-center'>
                                    <Col md={6} lg={6} xl={6} xxl={6} className='d-flex align-items-center justify-content-center'>
                                    <Image className="img-fluid " src={ProjectFour} fluid />
                                </Col>
                                    <Col md={6} lg={6} xl={6} xxl={6} >
                                    <h4>Codestream</h4>
                                    <h4>9 days - solo</h4>
                                        <p>On the last project, I decided to go solo to showcase the skills learned during the past 3 months. I developed a Flask Python backend connected to a Postgress SQL database. For the frontend I decided to go with React.
                                    </p>
                                    <p>
                                            The app is a social media site dedicated to software engineers and tech professionals, using old school style social media.

                                    </p>
                                        <Row className="text-center align-items-center justify-content-center">
                                            <Col className="d-flex justify-content-center mb-3 mb-sm-0">
                                                    <Button className="btn-change1" target="_blank" href='https://github.com/florentgiovannone/SEB-Project-4-front-end/blob/main/ReadMe.md'>
                                                    <Figure className='m-0'>
                                                        <p className='m-0'>ReadMe</p>
                                                    </Figure>
                                                </Button>{' '}
                                            </Col>
                                            <Col className="d-flex justify-content-center mb-3 mb-sm-0">
                                                    <Button className="btn-change2" target="_blank" href='https://codestreamsocialmedia.netlify.app/'>
                                                    <Figure className='m-0'>
                                                        <p className='m-0'>   Website</p>
                                                    </Figure>
                                                </Button>{' '}
                                            </Col>
                                        </Row>
                                </Col>

                            </Row>
                                <p className='proj-title pt-5'><strong>Tech Used</strong></p>
                                <Row  xs={12} >
                                <Col className="text-center">
                                    <Html5Original size='40' />
                                    <p className="text-center">HTML
                                    </p>
                                </Col>
                                <Col className="text-center"><Css3Original size='40' />
                                    <p>CSS</p></Col>
                                <Col className="text-center"><SassOriginal size='40' />
                                    <p>Sass</p></Col>
                                <Col className="text-center"><ReactOriginal size='40' />
                                    <p>React</p></Col>
                                <Col className="text-center"><PythonOriginal size='40' />
                                    <p>Python</p></Col>
                                <Col className="text-center"><PypiOriginal size='40' />
                                    <p>Pypi</p></Col>
                                <Col className="text-center"><FlaskOriginal size='40' />
                                    <p>Flask</p></Col>
                                <Col className="text-center"><SqlalchemyOriginal size='40' />
                                    <p>SQLAlchemy</p></Col>
                                <Col className="text-center"><NpmOriginalWordmark size='40' />
                                    <p>NPM</p></Col>
                                <Col className="text-center"><BulmaPlain size='40' />
                                    <p>Bulma</p></Col>
                                <Col className="text-center"><PostgresqlOriginal size='40' />
                                    <p>PostgreSQL</p></Col>
                                <Col className="text-center"><HerokuOriginal size='40' />
                                    <p>Heroku</p></Col>
                                <Col className="text-center"><NetlifyOriginal size='40' />
                                    <p>Netlify</p></Col>
                            </Row>

                        </Row>
                    </Carousel.Caption>
                </Row>
            </Carousel.Item>
        </Carousel>
            </Fade>
        </Container>

    </>
}
export default Projects;