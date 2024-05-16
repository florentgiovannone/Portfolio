import { Col, Row, Image, Container, Figure, Button, Tab, Tabs } from 'react-bootstrap';
import { Slide, Fade } from "react-awesome-reveal";
function AboutMe () {
    return <>
                <span className='anchor' id='aboutMe'></span>
                <Container fluid className='about'>
            <Slide direction='up' triggerOnce>
            <h3 className='text-center p-3'>About Me</h3>
        <Tabs
            defaultActiveKey="Profile"
                id="justify-tab-example"
                className=" tabs mb-3"
            justify
        >
                <Tab className="tab text-center" eventKey="Profile" title="Profile">
                    <p>I am a passionate, driven, and collaborative professional with 17 years of experience across 3 different countries (France, Peru & UK).</p>
                    <p>Throughout my career, I have navigated teams of varying sizes and backgrounds, honing my skills as both a team player and leader. In my previous career in hospitality, I excelled in crafting unforgettable guest experiences through meticulous attention to detail, ensuring every aspect of their interaction was seamlessly orchestrated and memorable.</p>
                    <p>Entering the field of software engineering with a passion for problem-solving and a commitment to continuous learning, I'm ready to contribute fresh perspectives and diligent work ethic to develop impactful solutions and grow alongside dynamic tech teams.</p>
                </Tab>
                    <Tab className="tab text-center" eventKey="Education" title="Education">
                    <p>January   - April 2024 - London, UK</p>
                    <p>General assembly | Software engineering Bootcamp</p>
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
                    <p>🇫🇷 French - (Fluent)</p>
                    <p>🇪🇸 Spanish - (Native)</p>
                </Tab>

                <Tab className="tab text-center" eventKey="Interest" title="Interest">
                    <p>I love doing and watching sport, particularly football. I like climbing and going to the gym. I’m also starting golfing once a week as a beginner.</p>
                    <p>Due to my past professional career, I like wine and food in general.</p>
                </Tab>
        </Tabs>
        </Slide>
        </Container>
    </>
}
export default AboutMe;