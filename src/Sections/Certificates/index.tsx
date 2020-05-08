import * as React from 'react';
import { Col, Container, Row } from 'react-grid-system';

import './index.scss';

export const Certificates: React.FC = () => (
    <section className="g-outer section-certificates section-indent">
        <Container className="g-inner">
            <h2 className="text-center">My <span>Certificates</span></h2>

            <Row>
                <Col xs={12} sm={10} offset={{ sm: 1 }} >
                    <Row>
                        <Col xs={6}>
                            <div className="item-certificate item-certificate__scrum">
                                <img src="assets/images/certificates/csm.jpg" className="img-responsive" alt="" />
                            </div>
                        </Col>
                        <Col xs={6}>
                            <div className="item-certificate item-certificate__scrum">
                                <img src="assets/images/certificates/acsm.jpg" className="img-responsive" alt="" />
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={4}>
                            <div className="item-certificate item-certificate__udemy">
                                <img src="assets/images/certificates/udemy-4.jpg" className="img-responsive" alt="" />
                            </div>
                        </Col>
                        <Col xs={4}>
                            <div className="item-certificate item-certificate__udemy">
                                <img src="assets/images/certificates/udemy-2.jpg" className="img-responsive" alt="" />
                            </div>
                        </Col>
                        <Col xs={4}>
                            <div className="item-certificate item-certificate__udemy">
                                <img src="assets/images/certificates/udemy-7.jpg" className="img-responsive" alt="" />
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={6} lg={3}>
                            <div className="item-certificate item-certificate__udemy">
                                <img src="assets/images/certificates/udemy-1.jpg" className="img-responsive" alt="" />
                            </div>
                        </Col>
                        <Col xs={6} lg={3}>
                            <div className="item-certificate item-certificate__udemy">
                                <img src="assets/images/certificates/udemy-5.jpg" className="img-responsive" alt="" />
                            </div>
                        </Col>
                        <Col xs={6} lg={3}>
                            <div className="item-certificate item-certificate__udemy">
                                <img src="assets/images/certificates/udemy-6.jpg" className="img-responsive" alt="" />
                            </div>
                        </Col>
                        <Col xs={6} lg={3}>
                            <div className="item-certificate item-certificate__udemy">
                                <img src="assets/images/certificates/udemy-3.jpg" className="img-responsive" alt="" />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </section>
);
