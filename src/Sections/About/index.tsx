import React from 'react';
import { Col, Container, Row } from 'react-grid-system';

import './index.scss';

export const About: React.FC = () => (
    <section className="g-outer section-about section-indent">
        <Container className="g-inner">
            <h2 className="text-center">About <span>me</span></h2>

            <Row>
                <Col xs={12} md={4} lg={4} offset={{ lg: 1 }} className="section-about__img">
                    <img src="assets/images/photo-about.png" className="img-responsive" alt="" />
                </Col>
                <Col xs={12} md={8} lg={6}>
                    <div className="base-text">
                        <p>
                            I’ve been working in IT for <strong>{(new Date()).getFullYear() - 2007}</strong> years.
                        </p>
                        <p>
                            As <strong>Project Manager</strong>, I ran a full-cycle IT-strategy project for a fashion house and several part-cycle projects.
                        </p>
                        <p>
                            As <strong>Front-end Developer</strong> I have created more than <strong>200</strong> websites (personal, landing pages, online-stores, sites for plants and automotive companies).
                        </p>
                        <p>
                            Some of the technologies and frameworks used: <strong>React</strong>, <strong>Redux</strong>, <strong>JavaScript</strong>, <strong>TypeScript</strong>, <strong>Webpack</strong>, <strong>SASS</strong>, <strong>Bootstrap</strong> and etc.
                        </p>
                        <p>
                            High efficiency in design programs: <strong>Sketch</strong>, <strong>Photoshop</strong>, <strong>Figma</strong>, <strong>Zeplin</strong>.
                        </p>
                        <p>
                            Also created <strong>plugin for Sketch</strong> (in 2017) - <a className="base-link" target="_blank" href="https://github.com/De-La-Vega/BootstrapGrid" rel="noopener">Bootstrap grid</a>.
                        </p>
                    </div>
                    <div>
                        <a href="https://drive.google.com/open?id=0BzEzLZK8t86HSHRqT2VrMEdJT3M" className="btn-base" target="_blank" rel="noopener">
                            Resume (en)
                        </a>
                        <a href="https://drive.google.com/open?id=0BzEzLZK8t86Hb3hIRmlKUjZEVG8" className="btn-base" target="_blank" rel="noopener">
                            Resume (ru)
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
);
