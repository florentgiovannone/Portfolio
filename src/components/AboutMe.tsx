import React from 'react';
import { Col, Row, Image, Container, Figure, Button, Tab, Tabs } from 'react-bootstrap';
import { Slide, Fade } from "react-awesome-reveal";
import Flo from "../assets/images/Flo.jpeg"
function AboutMe() {
    return <>
        <span className='anchor' id='aboutMe'></span>
        <Container fluid className='about'>
            <Slide direction='up' triggerOnce>
                <h3 className='text-center p-3'>About Me</h3>
                <Row>

                    <Tabs
                        defaultActiveKey="Profile"
                        id="justify-tab-example"
                        className=" tabs mb-3"
                        fill justify
                    >
                        <Tab className="tab" eventKey="Profile" title="Profile">
                            <Row className="align-items-center">
                                <Col
                                    xs={12} md={5}
                                    className="d-flex justify-content-center mb-4 mb-md-0 order-2 order-md-1"
                                >
                                    <Image
                                        className="img-fluid"
                                        roundedCircle={true}
                                        src={Flo}
                                        alt="Profile Picture"
                                        style={{ maxWidth: '300px' }}
                                    />
                                </Col>
                                <Col
                                    xs={12} md={7}
                                    className="d-flex flex-column justify-content-start order-1 order-md-2"
                                >
                                    <p>
                                        I am a Software engineer with expertise in <strong>Python, React, TypeScript, JavaScript. </strong>
                                        Proficiency in design tools like <strong>Figma</strong> and experience with both <strong>SQL (PERN)</strong> and <strong>NoSQL (MERN)</strong> technology stacks.
                                        I also have knowledge in <strong>CSS frameworks such as Bulma, Bootstrap, and Tailwind.</strong>
                                    </p>
                                    <p>
                                        As a recent bootcamp graduate specializing in <strong>React and Python</strong>, I am
                                        passionate about developing dynamic, user-friendly web applications. My
                                        expertise lies in building modern, responsive interfaces using React,
                                        while leveraging Python for backend services and data processing.
                                    </p>
                                    <p>
                                        Through intensive, hands-on training and real-world projects, I have
                                        developed a deep understanding of full-stack development, working with
                                        both front-end and back-end technologies. I enjoy solving complex
                                        problems, writing clean code, and continuously improving my skill set to
                                        stay current in the ever-evolving tech industry.
                                    </p>
                                    <p>
                                        I am excited to collaborate with forward-thinking teams and contribute to
                                        innovative projects that deliver impactful solutions.
                                    </p>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab className="tab text-center" eventKey="Education" title="Education">
                            <p>January   - April 2024 - London, UK</p>
                            <p>General Assembly | Software engineering Bootcamp</p>
                            <hr className='mb-3' />
                            <p>July 2019 - London, UK</p>
                            <p>Wine Spirit Education trust | Level 3</p>
                            <hr className='mb-3' />
                            <p>January 2016 - Lima, Peru</p>
                            <p>Cordon Blue | Master Taster Diploma</p>
                            <hr className='mb-3' />
                            <p>October 2016 - Lima, Peru</p>
                            <p>Master court of sommelier | Intro Level</p>
                        </Tab>
                        <Tab className="tab text-center" eventKey="Languages" title="Languages">
                            <p>🇬🇧 English - (Fluent)</p>
                            <p>🇫🇷 French - (Native)</p>
                            <p>🇪🇸 Spanish - (Fluent)</p>
                        </Tab>
                        <Tab className="tab text-center" eventKey="Interest" title="Interest">
                            <p>I love doing and watching sport, particularly football. I like climbing and going to the gym. I’m also starting golfing once a week as a beginner.</p>
                            <p>Due to my past professional career, I like wine and food in general.</p>
                        </Tab>
                    </Tabs>
                </Row>
            </Slide>
        </Container>
    </>
}
export default AboutMe;