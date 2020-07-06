import React from 'react';
import { Col, Container, Row } from 'react-grid-system';

import './index.scss';

export const About: React.FC = () => (
    <section className="g-outer section-about section-indent">
        <Container className="g-inner">
            <h2 className="text-center">About <span>me</span></h2>

            <Row>
                <Col xs={12} md={4} offset={{ md: 1 }} className="section-about__img">
                    <img src="assets/images/photo-about.jpg" className="img-responsive" alt="" />
                </Col>
                <Col xs={12} md={6}>
                    <div className="base-text">
                        <p>
                            I work in web-development for <strong>{(new Date()).getFullYear() - 2007}</strong> years.
                        </p>
                        <p>
                            During this time i created <strong>200+</strong> websites (personal, landing pages, online-stores, sites for plants and automotive companies).
                        </p>
                        <p>
                            Technologies i'm using: <strong>React</strong>, <strong>Redux</strong>, <strong>JavaScript</strong>, <strong>TypeScript</strong>, <strong>Webpack</strong>, <strong>SASS</strong>, <strong>Bootstrap</strong> and etc.
                        </p>
                        <p>
                            Good in design programs: <strong>Sketch</strong>, <strong>Photoshop</strong>.
                        </p>
                        <p>
                            Also created <strong>plugin for Sketch</strong> - <a className="base-link" target="_blank" href="https://github.com/De-La-Vega/BootstrapGrid">Bootstrap grid</a>.
                        </p>
                    </div>
                    <div>
                        <a href="https://drive.google.com/open?id=0BzEzLZK8t86HSHRqT2VrMEdJT3M" className="btn-base" target="_blank">
                            Resume (en)
                        </a>

                        &nbsp;&nbsp;&nbsp;

                        <a href="https://drive.google.com/open?id=0BzEzLZK8t86Hb3hIRmlKUjZEVG8" className="btn-base" target="_blank">
                            Resume (ru)
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
);
