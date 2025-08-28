import React from 'react';
import { Col, Row, Image, Container, Carousel, Button, Figure, } from 'react-bootstrap';
import HeroImage from "../assets/images/Hero.png";
import ProjectOne from "../assets/images/project_1.png"
import ProjectTwo from "../assets/images/project_2.png"
import ProjectThree from "../assets/images/project_3.png"
import ProjectFour from "../assets/images/project_4.png"
import ChezFlo from "../assets/images/chez_flo.png"
import Test from "../assets/images/test.gif"
import {
    Html5Original, Css3Original, PypiOriginal,
    NpmOriginalWordmark, JavascriptOriginal,
    FlaskOriginal, ReactOriginal, PythonOriginal, ExpressOriginal, BulmaPlain, MongodbPlain, MongooseOriginal,
    PostgresqlOriginal, NetlifyOriginal, HerokuOriginal, SqlalchemyOriginal, SassOriginal, GithubOriginal, TailwindcssOriginal
} from 'devicons-react';
import { Fade } from "react-awesome-reveal";
function Projects() {
    return <>
        <span className='anchor' id='projects'></span>
        <Container fluid className='proj hover-underline-animation-proj'>
            <Fade direction='down' delay={500} triggerOnce>
                <h3 className=' proj-title text-center py-1 '>Projects</h3>
                <Carousel>
                    <Carousel.Item>
                        <Row className='carousel project'>
                            <Carousel.Caption className=' p-1 m-0  d-flex justify-content-center align-items-center'>
                                <Row className='justify-content-center align-items-center h-100'>
                                    <Col lg={6} className='d-none d-lg-flex justify-content-center align-items-center'>
                                        <Image className="img-fluid" src={ProjectOne} fluid style={{ maxWidth: '400px' }} />
                                    </Col>
                                    <Col sm={12} lg={6} className='text-center text-lg-start'>
                                        <h4>Star Wars - Space Invaders</h4>
                                        <h4>4 days - Solo</h4>
                                        <div className='d-flex d-lg-none align-items-center justify-content-center my-2'>
                                            <Image className="img-fluid" src={ProjectOne} fluid style={{ maxWidth: '400px' }} />
                                        </div>
                                        <p className='proj-title '><strong>Tech Stack</strong></p>
                                        <Row className='justify-content-center justify-content-lg-start'>
                                            <Col xs={4} lg={3}>
                                                <Html5Original size='40' />
                                                <p>HTML</p>
                                            </Col>
                                            <Col xs={4} lg={3}>
                                                <Css3Original size='40' />
                                                <p>CSS</p>
                                            </Col>
                                            <Col xs={4} lg={3}>
                                                <JavascriptOriginal size='40' />
                                                <p>JavaScript</p>
                                            </Col>
                                        </Row>
                                        <p>
                                            On the first project I developed a star wars themed space invader game using HTML / CSS / vanilla JavaScript. This project was 1 week long.
                                            <p>
                                                I structured the workload day by day and ensured that hours worked were accounted for.                                    </p>
                                        </p>
                                        <Row className="text-center text-lg-start align-items-center justify-content-center justify-content-lg-start">
                                            <Col xs={6} lg={4} className="d-flex justify-content-center justify-content-lg-start mb-3 mb-sm-0">
                                                <Button className="btn-change1" target="_blank" href='https://github.com/florentgiovannone/SEB-Project-1/blob/main/README.md'>
                                                    <p className='m-0'>ReadMe</p>
                                                </Button>
                                            </Col>
                                            <Col xs={6} lg={4} className="d-flex justify-content-center justify-content-lg-start mb-3 mb-sm-0">
                                                <Button className="btn-change2" target="_blank" href='https://starwarsinvaqder.netlify.app/'>
                                                    <Figure className='m-0'>
                                                        <p className='m-0'>   Website</p>
                                                    </Figure>
                                                </Button>{' '}
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Carousel.Caption>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className='carousel'>
                            <Carousel.Caption className=' p-1 m-0  d-flex justify-content-center align-items-center'>
                                <Row className='justify-content-center align-items-center h-100'>
                                    <Col lg={6} className='d-none d-lg-flex justify-content-center align-items-center'>
                                        <Image className="img-fluid" src={ProjectTwo} fluid style={{ maxWidth: '400px' }} />
                                    </Col>
                                    <Col sm={12} lg={6} className='text-center text-lg-start'>
                                        <h4>Game of thrones</h4>
                                        <h4>3 days - pair</h4>
                                        <div className='d-flex d-lg-none align-items-center justify-content-center my-2'>
                                            <Image className="img-fluid" src={ProjectTwo} fluid style={{ maxWidth: '400px' }} />
                                        </div>
                                        <p className='proj-title'><strong>Tech Stack</strong></p>
                                        <Row className='justify-content-center justify-content-lg-start'>
                                            <Col xs={3} lg={3} className="text-center text-lg-start"><ReactOriginal size='40' />
                                                <p>React</p></Col>
                                            <Col xs={3} lg={3} className="text-center text-lg-start"><NpmOriginalWordmark size='40' />
                                                <p>NPM</p></Col>
                                            <Col xs={3} lg={3} className="text-center text-lg-start"><BulmaPlain size='40' />
                                                <p>Bulma</p></Col>
                                            <Col xs={3} lg={3} className="text-center text-lg-start"><NetlifyOriginal size='40' />
                                                <p>Netlify</p></Col>
                                        </Row>
                                        <p>
                                            On the second project I also worked as a pair. We decided to work with a game of thrones API. We decided to display everything we learned in class using React and Bulma on CSS.
                                        </p>
                                        <p>
                                            The initial React project building and component display was done as a driver and navigator team. We then shared workload equally and checked on each other throughout the day to ensure that everything was going to be delivered on time. We deployed and fixed the latest bug as driver and navigator at the end too.

                                        </p>
                                        <Row className="text-center text-lg-start align-items-center justify-content-center justify-content-lg-start">
                                            <Col xs={6} lg={4} className="d-flex justify-content-center justify-content-lg-start mb-3 mb-sm-0">
                                                <Button className="btn-change1" target="_blank" href='https://github.com/florentgiovannone/SEB-Project-2/blob/main/README.MD'>
                                                    <Figure className='m-0'>
                                                        <p className='m-0'>ReadMe</p>
                                                    </Figure>
                                                </Button>{' '}
                                            </Col>
                                            <Col xs={6} lg={4} className="d-flex justify-content-center justify-content-lg-start mb-3 mb-sm-0">
                                                <Button className="btn-change2" target="_blank" href='https://majestic-pegasus-01f742.netlify.app/'>
                                                    <Figure className='m-0'>
                                                        <p className='m-0'>   Website</p>
                                                    </Figure>
                                                </Button>{' '}
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Carousel.Caption>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className='carousel '>
                            <Carousel.Caption className=' p-1 m-0  d-flex justify-content-center align-items-center'>
                                <Row className='justify-content-center align-items-center h-100'>
                                    <Col lg={6} className='d-none d-lg-flex justify-content-center align-items-center'>
                                        <Image className="img-fluid" src={ProjectThree} fluid style={{ maxWidth: '400px' }} />
                                    </Col>
                                    <Col sm={12} lg={6} className='text-center text-lg-start'>
                                        <h4>Rouge wine cave</h4>
                                        <h4>5 days - pair</h4>
                                        <div className='d-flex d-lg-none align-items-center justify-content-center my-2'>
                                            <Image className="img-fluid" src={ProjectThree} fluid style={{ maxWidth: '400px' }} />
                                        </div>
                                        <p className='proj-title'><strong>Tech Stack</strong></p>
                                        <Row className='justify-content-center justify-content-lg-start'>
                                            <Col xs={4} lg={3} className="text-center text-lg-start"><ReactOriginal size='40' />
                                                <p>React</p></Col>
                                            <Col xs={4} lg={3} className="text-center text-lg-start"><ExpressOriginal size='40' />
                                                <p>Express</p></Col>
                                            <Col xs={4} lg={3} className="text-center text-lg-start"><BulmaPlain size='40' />
                                                <p>Bulma</p></Col>
                                            <Col xs={4} lg={3} className="text-center text-lg-start"><MongodbPlain size='40' />
                                                <p>MongoDB</p></Col>
                                            <Col xs={4} lg={3} className="text-center text-lg-start"><MongooseOriginal size='40' />
                                                <p>Mongoose</p></Col>
                                            <Col xs={4} lg={3} className="text-center text-lg-start"><NetlifyOriginal size='40' />
                                                <p>Netlify</p></Col>
                                        </Row>
                                        <p>
                                            On the third project I worked in a pair. We developed our own API using Express and MongoDB as our database. We also used React for our frontend. We built a wine dedicated app that is a cave builder where users could create an account, update account details and password.
                                        </p>
                                        <p>
                                            I took ownership of developing the whole logic for adding wines to your own cave, looking for other users and seeing other user's caves and account details alongside the design and outlook.
                                        </p>
                                        <Row className="text-center text-lg-start align-items-center justify-content-center justify-content-lg-start">
                                            <Col xs={6} lg={4} className="d-flex justify-content-center justify-content-lg-start mb-3 mb-sm-0">
                                                <Button className="btn-change1" target="_blank" href='https://github.com/florentgiovannone/SEB-Project-3-front-end/blob/main/README.md'>
                                                    <Figure className='m-0'>
                                                        <p className='m-0'>ReadMe</p>
                                                    </Figure>
                                                </Button>{' '}
                                            </Col>
                                            <Col xs={6} lg={4} className="d-flex justify-content-center justify-content-lg-start mb-3 mb-sm-0">
                                                <Button className="btn-change2" target="_blank" href='https://rouge-wines.netlify.app/'>
                                                    <Figure className='m-0'>
                                                        <p className='m-0'>   Website</p>
                                                    </Figure>
                                                </Button>{' '}
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Carousel.Caption>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className='carousel'>
                            <Carousel.Caption className=' p-1 m-0 d-flex justify-content-center align-items-center'>
                                <Row className='justify-content-center align-items-center h-100'>
                                    <Col lg={6} className='d-none d-lg-flex justify-content-center align-items-center'>
                                        <Image className="img-fluid" src={ProjectFour} fluid style={{ maxWidth: '400px' }} />
                                    </Col>
                                    <Col sm={12} lg={6} className='text-center text-lg-start'>
                                        <h4>Codestream</h4>
                                        <h4>9 days - solo</h4>
                                        <div className='d-flex d-lg-none align-items-center justify-content-center my-2'>
                                            <Image className="img-fluid" src={ProjectFour} fluid style={{ maxWidth: '400px' }} />
                                        </div>
                                        <p className='proj-title'><strong>Tech Used</strong></p>
                                        <Row className='justify-content-center justify-content-lg-start'>
                                            <Col xs={4} lg={3} className="text-center text-lg-start"><ReactOriginal size='40' />
                                                <p>React</p></Col>
                                            <Col xs={4} lg={3} className="text-center text-lg-start"><PythonOriginal size='40' />
                                                <p>Python</p></Col>
                                            <Col xs={4} lg={3} className="text-center text-lg-start"><PypiOriginal size='40' />
                                                <p>Pypi</p></Col>
                                            <Col xs={4} lg={3} className="text-center text-lg-start"><FlaskOriginal size='40' />
                                                <p>Flask</p></Col>
                                            <Col xs={4} lg={3} className="text-center text-lg-start"><SqlalchemyOriginal size='40' />
                                                <p>SQLAlchemy</p></Col>
                                            <Col xs={4} lg={3} className="text-center text-lg-start"><BulmaPlain size='40' />
                                                <p>Bulma</p></Col>
                                            <Col xs={4} lg={3} className="text-center text-lg-start"><PostgresqlOriginal size='40' />
                                                <p>PostgreSQL</p></Col>
                                        </Row>
                                        <p>On the last project, I decided to go solo to showcase the skills learned during the past 3 months. I developed a Flask Python backend connected to a Postgress SQL database. For the frontend I decided to go with React.
                                        </p>
                                        <p>
                                            The app is a social media site dedicated to software engineers and tech professionals, using old school style social media.

                                        </p>
                                        <Row className="text-center text-lg-start align-items-center justify-content-center justify-content-lg-start">
                                            <Col xs={6} lg={4} className="d-flex justify-content-center justify-content-lg-start mb-3 mb-sm-0">
                                                <Button className="btn-change1" target="_blank" href='https://github.com/florentgiovannone/SEB-Project-4-front-end/blob/main/ReadMe.md'>
                                                    <Figure className='m-0'>
                                                        <p className='m-0'>ReadMe</p>
                                                    </Figure>
                                                </Button>{' '}
                                            </Col>
                                            <Col xs={6} lg={4} className="d-flex justify-content-center justify-content-lg-start mb-3 mb-sm-0">
                                                <Button className="btn-change2" target="_blank" href='https://codestreamsocialmedia.netlify.app/'>
                                                    <Figure className='m-0'>
                                                        <p className='m-0'>   Website</p>
                                                    </Figure>
                                                </Button>{' '}
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Carousel.Caption>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className='carousel'>
                            <Carousel.Caption className=' p-1 m-0 d-flex justify-content-center align-items-center'>
                                <Row className='justify-content-center align-items-center h-100'>
                                    <Col lg={6} className='d-none d-lg-flex justify-content-center align-items-center'>
                                        <Image className="img-fluid" src={ChezFlo} fluid style={{ maxWidth: '400px' }} />
                                    </Col>
                                    <Col sm={12} lg={6} className='text-center text-lg-start'>
                                        <h4>Chez Flo - Restaurant Demo</h4>
                                        <h4>1month - solo</h4>
                                        <div className='d-flex d-lg-none align-items-center justify-content-center my-2'>
                                            <Image className="img-fluid" src={ChezFlo} fluid style={{ maxWidth: '400px' }} />
                                        </div>
                                        <p className='proj-title'><strong>Tech Used</strong></p>
                                        <Row className='justify-content-center justify-content-lg-start'>
                                            <Col xs={4} lg={3} className="text-center text-lg-start"><ReactOriginal size='40' />
                                                <p>React</p></Col>
                                            <Col xs={4} lg={3} className="text-center text-lg-start"><PythonOriginal size='40' />
                                                <p>Python</p></Col>
                                            <Col xs={4} lg={3} className="text-center text-lg-start"><PypiOriginal size='40' />
                                                <p>Pypi</p></Col>
                                            <Col xs={4} lg={3} className="text-center text-lg-start"><FlaskOriginal size='40' />
                                                <p>Flask</p></Col>
                                            <Col xs={4} lg={3} className="text-center text-lg-start"><SqlalchemyOriginal size='40' />
                                                <p>SQLAlchemy</p></Col>
                                            <Col xs={4} lg={3} className="text-center text-lg-start"><TailwindcssOriginal size='40' />
                                                <p>Tailwindcss</p></Col>
                                            <Col xs={4} lg={3} className="text-center text-lg-start"><PostgresqlOriginal size='40' />
                                                <p>PostgreSQL</p></Col>
                                        </Row>
                                        <p>I designed and developed a modern, mobile-friendly website for a restaurant, with a focus on simplicity, elegance, and ease of management. The goal was to provide the restaurant with an online presence that reflects its brand identity while allowing non-technical staff to easily update menus, specials, and images.
                                        </p>
                                        <p>
                                            The restaurant now has a stylish, reliable website that reflects its brand and allows staff to update content in minutes. This improved both customer engagement and operational efficiency, while giving the restaurant full control over its digital presence.

                                        </p>
                                        <Row className="text-center text-lg-start align-items-center justify-content-center justify-content-lg-start">
                                            <Col xs={6} lg={4} className="d-flex justify-content-center justify-content-lg-start mb-3 mb-sm-0">
                                                <Button className="btn-change1" target="_blank" href='https://github.com/florentgiovannone/CHEZ_FLO_FE/blob/main/README.md'>
                                                    <Figure className='m-0'>
                                                        <p className='m-0'>ReadMe</p>
                                                    </Figure>
                                                </Button>{' '}
                                            </Col>
                                            <Col xs={6} lg={4} className="d-flex justify-content-center justify-content-lg-start mb-3 mb-sm-0">
                                                <Button className="btn-change2" target="_blank" href='https://codestreamsocialmedia.netlify.app/'>
                                                    <Figure className='m-0'>
                                                        <p className='m-0'>Website</p>
                                                    </Figure>
                                                </Button>{' '}
                                            </Col>
                                        </Row>
                                    </Col>
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