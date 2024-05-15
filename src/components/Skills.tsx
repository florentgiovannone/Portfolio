import { Card, Container,Row, Col } from 'react-bootstrap';
import {
    Html5Original, Css3Original, PypiOriginal, 
    NpmOriginalWordmark, JavascriptOriginal, 
    FlaskOriginal, ReactOriginal, PythonOriginal, 
    JestPlain, ExpressOriginal, BulmaPlain, BootstrapOriginal, 
    ReactbootstrapOriginal, MongodbPlain, MongooseOriginal, InsomniaPlain,
    PostgresqlOriginal, NetlifyOriginal, HerokuOriginal, GitOriginal, 
    GithubOriginal, SqlalchemyOriginal,
    SassOriginal,  } from 'devicons-react';
import { Fade } from "react-awesome-reveal";
function Skills () {
    return (<>

        <Container fluid className='skills underline-skills p-5'>
            <span className='anchor' id='skills'></span>
            <Fade triggerOnce >
            <Row lg={1} className='justify-content-center'>            
            <h2 className='   text-center p-4 '> Skills</h2>
            <span className='  '></span>
            </Row>
            </Fade>
            <Container>
                <Fade cascade  triggerOnce>
            <Row className='justify-content-center' xs='auto' lg={6} >
                <Col md={2} lg={1} className="    text-center " >    
                    <Html5Original  size='50'/>
                    <Card.Body>
                        <Card.Text className="text-center">HTML
                        </Card.Text>
                    </Card.Body>
                </Col>
                    <Col md={2} lg={1} className="   text-center" >    
                    <Css3Original  size='50'/>
                    <Card.Body>
                        <Card.Text className="text-center">CSS
                        </Card.Text>
                    </Card.Body>
                </Col>
                    <Col md={2} lg={1} className="   text-center" >    
                    <SassOriginal  size='50'/>
                    <Card.Body>
                        <Card.Text className="text-center">Sass
                        </Card.Text>
                    </Card.Body>
                </Col>
                    <Col md={2} lg={1} className="    text-center" >    
                    <JavascriptOriginal  size='50'/>
                    <Card.Body>
                        <Card.Text className="text-center">JavaScript
                        </Card.Text>
                    </Card.Body>
                </Col>
                    <Col md={2} lg={1} className="   text-center" >    
                    <ReactOriginal  size='50'/>
                    <Card.Body>
                        <Card.Text className="text-center">React.js
                        </Card.Text>
                    </Card.Body>
                </Col>
                    <Col md={2} lg={1} className="   text-center" >
                    <BulmaPlain size='50' />
                    <Card.Body>
                        <Card.Text className="text-center">Bulma
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
            <Row xs='auto' lg={6} className='justify-content-center'>
                <Col md={2} lg={1} className="   text-center" >
                    <BootstrapOriginal size='50' />
                    <Card.Body>
                        <Card.Text className="text-center">Bootstrap
                        </Card.Text>
                    </Card.Body>
                </Col>
                <Col md={2} lg={1} className="   text-center" >
                    <ReactbootstrapOriginal size='50' />
                    <Card.Body>
                        <Card.Text className="text-center">React Boostrap
                        </Card.Text>
                    </Card.Body>
                </Col>
                <Col md={2} lg={1} className="   text-center" >
                    <NpmOriginalWordmark size='50' />
                    <Card.Body>
                        <Card.Text className="text-center">NPM
                        </Card.Text>
                    </Card.Body>
                </Col>
                <Col md={2} lg={1} className="   text-center" >
                    <ExpressOriginal size='50' />
                    <Card.Body>
                        <Card.Text className="text-center">Express
                        </Card.Text>
                    </Card.Body>
                </Col>
                <Col md={2} lg={1} className="   text-center" >
                    <MongodbPlain size='50' />
                    <Card.Body>
                        <Card.Text className="text-center">MongoDB
                        </Card.Text>
                    </Card.Body>
                </Col>
                <Col md={2} lg={1} className="   text-center" >
                    <MongooseOriginal size='50' />
                    <Card.Body>
                        <Card.Text className="text-center">Mongoose
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
            <Row xs='auto' lg={6} className='justify-content-center'>
                <Col md={2} lg={1} className="   text-center" >
                    <JestPlain size='50' />
                    <Card.Body>
                        <Card.Text className="text-center">Jest
                        </Card.Text>
                    </Card.Body>
                </Col>
                <Col md={2} lg={1} className="   text-center" >    
                    <PythonOriginal  size='50'/>
                    <Card.Body>
                        <Card.Text className="text-center">Python
                        </Card.Text>
                    </Card.Body>
                </Col>
                <Col md={2} lg={1}  className="   text-center" >    
                    <PypiOriginal size='50'/>
                    <Card.Body>
                        <Card.Text className="text-center">Pypi
                        </Card.Text>
                    </Card.Body>
                </Col>
                <Col md={2} lg={1} className="   text-center" >
                    <FlaskOriginal size='50' />
                    <Card.Body>
                        <Card.Text className="text-center">Flask
                        </Card.Text>
                    </Card.Body>
                </Col>
                <Col md={2} lg={1} className="   text-center" >
                    <NetlifyOriginal size='50' />
                    <Card.Body>
                        <Card.Text className="text-center">Netlify
                        </Card.Text>
                    </Card.Body>
                </Col>
                <Col md={2} lg={1} className="   text-center" >
                    <PostgresqlOriginal size='50' />
                    <Card.Body>
                        <Card.Text className="text-center">PostgreSQL
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
            <Row xs='auto' lg={6} className='justify-content-center'>
                <Col md={2} lg={1} className="   text-center" >
                    <HerokuOriginal size='50' />
                    <Card.Body>
                        <Card.Text className="text-center">Heroku
                        </Card.Text>
                    </Card.Body>
                </Col>
                <Col md={2} lg={1} className="   text-center" >
                    <GitOriginal size='50' />
                    <Card.Body>
                        <Card.Text className="text-center">Git
                        </Card.Text>
                    </Card.Body>
                </Col>
                <Col md={2} lg={2} className="   text-center" >
                    <GithubOriginal size='50' />
                    <Card.Body>
                        <Card.Text className="text-center">Github
                        </Card.Text>
                    </Card.Body>
                </Col>
                <Col md={2} lg={1} className="   text-center" >
                    <InsomniaPlain size='50' />
                    <Card.Body>
                        <Card.Text className="text-center">Insomnia
                        </Card.Text>
                    </Card.Body>
                </Col>
                <Col md={2} lg={1} className="   text-center" >
                    <SqlalchemyOriginal size='50' />
                    <Card.Body>
                        <Card.Text className="text-center">SQLAlchemy
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
                </Fade>
            </Container>

        </Container>

    </>)
}
export default Skills;