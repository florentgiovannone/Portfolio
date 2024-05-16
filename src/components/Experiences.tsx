import { Col, Row, Image, Container, ListGroup } from 'react-bootstrap';
import { Fade } from "react-awesome-reveal";
function Experiences () {
    return (<>
        <span className='anchor' id='experiences'/>
        <Container fluid className='exp ' >
            <Fade direction='right' delay={500} triggerOnce>
<h3 className=' text-center p-3'>Experience</h3>

            <Container className='container pb-3' fluid>
                <Row>
                    <Col xs='auto' lg={6} >
                        <h5 className="d-flex justify-content-start">Software Engineering Immersive Bootcamp</h5>
                        <h5 className="d-flex justify-content-start">General Assembly</h5>
                    </Col>
                    <Col xs='auto' lg={6}>
                        <h5 className="d-flex justify-content-end">Jan 2024 - Apr 2024 | Remote</h5>
                    </Col>
                </Row>
                <Row>
                    <ul>
                        <li>A 12-week immersive course taken remotely using Zoom and Slack</li>
                        <li>We participated in daily stand-ups, pair-coding and group work alongside solo projects </li>
                        <li>Working across several Tech-Stacks</li>
                        <li>For full project information see Projects section</li>
                    </ul>
                </Row>
                <Row>
                    <p><strong>Tech Stack:</strong> JavaScript, Python, React, CSS/SASS, Node.js, MongoDB, Typescript, PostgreSQL, RESTful APIs</p>
                </Row>
            </Container>

            <hr className='pb-3'/>
            </Fade>
            <Fade direction='left' delay={500}  triggerOnce>
            <Container className='container pb-3'>
                <Row>
                    <Col xs='auto' lg={6} >
                        <h5 className="d-flex justify-content-start">Restauratn Fine Dining Manager</h5>
                        <h5 className="d-flex justify-content-start">ISS</h5>
                    </Col>
                    <Col xs='auto' lg={6}>
                        <h5 className="d-flex justify-content-end">Aug 2022 - Jan 2024 | On-site</h5>
                    </Col>
                </Row>
                <Row>
                    <ul>
                        <li>Close collaboration with the marketing and PR team is pivotal as we explore innovative marketing strategies aimed at driving business growth and amplifying revenue streams</li>
                        <li>Managing a budget (Opex & capex)</li>
                        <li>Working on a PnL closely with the GM to make sure the cost of the department is sustainable
                            Communicating with other departments (engineering, back of house, procurement, ...) to unsure smooth delivery</li>
                        <li>Ensure that the 20 team members are being looked after in line with the company ethos and policies</li>
                    </ul>
                </Row>
            </Container>


            <hr className='pb-3' />
            </Fade>
            <Fade direction='right'delay={500}  triggerOnce>
            <Container className='container pb-3'>
                <Row>
                    <Col xs='auto' lg={6}>
                        <h5 className="d-flex justify-content-start">Pre-opening General Manager</h5>
                        <h5 className="d-flex justify-content-start">Antillean</h5>
                    </Col>
                    <Col xs='auto'  lg={6}>
                        <h5 className="d-flex justify-content-end">Jun 2021 - Aug 2022 | On-site</h5>
                    </Col>
                </Row>
                <Row>
                    <ul>
                        <li>Before the grand opening, I meticulously oversee pre-opening duties at the restaurant, prioritising health and safety protocols, conducting comprehensive staff (18 team members) training sessions, and ensuring meticulous adherence to legal regulations</li>
                        <li>Compliance review for F&S and H&S</li>
                        <li>Creating Human Ressources principals</li>
                        <li>Looking at marketing strategies to grow the business and revenue</li>
                        <li>Working on a P&L closely with the F&B manager to make sure the cost of the department is sustainable</li>
                    </ul>
                </Row>
            </Container>
                <hr className='pb-3' />
                </Fade>

            <Fade direction='left'delay={500}  triggerOnce>
            <Container className='container pb-3'>
                <Row>
                    <Col xs='auto' lg={6}>
                        <h5 className="d-flex justify-content-start">Restaurant General Manager</h5>
                        <h5 className="d-flex justify-content-start">Fortnum & Mason at the Royal Exchange </h5>
                    </Col>
                    <Col xs='auto' lg={6}>
                        <h5 className="d-flex justify-content-end">Jan 2019 - Jun 2021 | On-site</h5>
                    </Col>
                </Row>
                <Row>
                    <ul>
                        <li>Together with the marketing/PR team, we're delving into diverse marketing approaches, all aimed at propelling business expansion and augmenting revenue generation</li>
                        <li>Managing a team of 40 member </li>
                        <li>Working on a P&L closely with the F&B manager to make sure the cost of the department is sustainable </li>
                        <li>Monitoring sales and then writing informative reports for each event</li>
                    </ul>
                </Row>
            </Container>
            </Fade>
        </Container>

    </>
    );
}
export default Experiences;