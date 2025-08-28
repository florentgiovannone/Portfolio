import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import {
    Html5Original, Css3Original, PypiOriginal,
    NpmOriginalWordmark, JavascriptOriginal,
    FlaskOriginal, ReactOriginal, PythonOriginal,
    JestPlain, ExpressOriginal, BulmaPlain, BootstrapOriginal,
    ReactbootstrapOriginal, MongodbPlain, MongooseOriginal, InsomniaPlain,
    PostgresqlOriginal, NetlifyOriginal, HerokuOriginal, GitOriginal,
    GithubOriginal, SqlalchemyOriginal,
    SassOriginal, TypescriptOriginal, PytestOriginalWordmark,
    NuxtjsOriginal,
} from 'devicons-react';
import { Fade } from "react-awesome-reveal";
function Skills() {
    return <>
        <span className='anchor' id='skills'></span>
        <Container fluid className='skills'>
            <Fade direction='up' cascade triggerOnce>
                <h3 className='   text-center p-3 '> Skills</h3>
                <Container className='pb-5 pt-3'>
                    <Row className='justify-content-center pb-5' xs='auto' lg={6} >
                        <Col xs={4} sm={4} md={2} lg={2} xl={2} xxl={2} className="text-center" >
                            <JavascriptOriginal size='50' />
                            <Card.Body>
                                <Card.Text className="text-center">JavaScript
                                </Card.Text>
                            </Card.Body>
                        </Col>
                        <Col xs={4} sm={4} md={2} lg={2} xl={2} xxl={2} className="   text-center" >
                            <ReactOriginal size='50' />
                            <Card.Body>
                                <Card.Text className="text-center">React.js
                                </Card.Text>
                            </Card.Body>
                        </Col>

                        <Col xs={4} sm={4} md={2} lg={2} xl={2} xxl={2} className="   text-center" >
                            <PythonOriginal size='50' />
                            <Card.Body>
                                <Card.Text className="text-center">Python
                                </Card.Text>
                            </Card.Body>
                        </Col>
                        <Col xs={4} sm={4} md={2} lg={2} xl={2} xxl={2} className="   text-center" >
                            <TypescriptOriginal size='50' />
                            <Card.Body>
                                <Card.Text className="text-center">Python
                                </Card.Text>
                            </Card.Body>
                        </Col>

                        <Col xs={4} sm={4} md={2} lg={2} xl={2} xxl={2} className="   text-center" >
                            <FlaskOriginal size='50' />
                            <Card.Body>
                                <Card.Text className="text-center">Flask
                                </Card.Text>
                            </Card.Body>
                        </Col>
                        <Col xs={4} sm={4} md={2} lg={2} xl={2} xxl={2} className="   text-center" >
                            <PostgresqlOriginal size='50' />
                            <Card.Body>
                                <Card.Text className="text-center">PostgreSQL
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                    <Row xs='auto' lg={6} className='justify-content-center pb-5'>
                        <Col xs={4} sm={4} md={2} lg={2} xl={2} xxl={2} className="   text-center" >
                            <SqlalchemyOriginal size='50' />
                            <Card.Body>
                                <Card.Text className="text-center">SQLAlchemy
                                </Card.Text>
                            </Card.Body>
                        </Col>
                        <Col xs={4} sm={4} md={2} lg={2} xl={2} xxl={2} className="   text-center" >
                            <ExpressOriginal size='50' />
                            <Card.Body>
                                <Card.Text className="text-center">Express
                                </Card.Text>
                            </Card.Body>
                        </Col>
                        <Col xs={4} sm={4} md={2} lg={2} xl={2} xxl={2} className="   text-center" >
                            <MongodbPlain size='50' />
                            <Card.Body>
                                <Card.Text className="text-center">MongoDB
                                </Card.Text>
                            </Card.Body>
                        </Col>
                        <Col xs={4} sm={4} md={2} lg={2} xl={2} xxl={2} className="   text-center" >
                            <MongooseOriginal size='50' />
                            <Card.Body>
                                <Card.Text className="text-center">Mongoose
                                </Card.Text>
                            </Card.Body>
                        </Col>
                        <Col xs={4} sm={4} md={2} lg={2} xl={2} xxl={2} className="   text-center" >
                            <PypiOriginal size='50' />
                            <Card.Body>
                                <Card.Text className="text-center">Pypi
                                </Card.Text>
                            </Card.Body>
                        </Col>

                        <Col xs={4} sm={4} md={2} lg={2} xl={2} xxl={2} className="   text-center" >
                            <PytestOriginalWordmark size='50' />
                            <Card.Body>
                                <Card.Text className="text-center">Pytest
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                    <Row xs='auto' lg={6} className='justify-content-center'>
                        <Col xs={4} sm={4} md={2} lg={2} xl={2} xxl={2} className="   text-center" >
                            <JestPlain size='50' />
                            <Card.Body>
                                <Card.Text className="text-center">Jest
                                </Card.Text>
                            </Card.Body>
                        </Col>
                        <Col xs={4} sm={4} md={2} lg={2} xl={2} xxl={2} className="   text-center" >
                            <BulmaPlain size='50' />
                            <Card.Body>
                                <Card.Text className="text-center">Bulma
                                </Card.Text>
                            </Card.Body>
                        </Col>
                        <Col xs={4} sm={4} md={2} lg={2} xl={2} xxl={2} className="   text-center" >
                            <BootstrapOriginal size='50' />
                            <Card.Body>
                                <Card.Text className="text-center">Bootstrap
                                </Card.Text>
                            </Card.Body>
                        </Col>
                        <Col xs={4} sm={4} md={2} lg={2} xl={2} xxl={2} className="   text-center" >
                            <ReactbootstrapOriginal size='50' />
                            <Card.Body>
                                <Card.Text className="text-center">React Boostrap
                                </Card.Text>
                            </Card.Body>
                        </Col>
                        <Col xs={4} sm={4} md={2} lg={2} xl={2} xxl={2} className="   text-center" >
                            <NuxtjsOriginal size='50' />
                            <Card.Body>
                                <Card.Text className="text-center">Nuxt.js
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>

                </Container>
            </Fade>
        </Container>

    </>
}
export default Skills;