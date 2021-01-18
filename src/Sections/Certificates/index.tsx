import React from 'react';
import { Col, Container, Row } from 'react-grid-system';

import './index.scss';

export const Certificates: React.FC = () => (
    <section className="g-outer section-certificates section-indent">
        <Container className="g-inner">
            <h2 className="text-center">My <span>Certificates</span></h2>

            <Row>
                <Col xs={12} lg={10} offset={{ lg: 1 }} >
                    <Row>
                        <Col xs={6} lg={3}>
                            <div className="item-certificate item-certificate__bordered">
                                <img src="assets/images/certificates/csm.png" className="img-responsive" alt="" />
                            </div>
                        </Col>
                        <Col xs={6} lg={3}>
                            <div className="item-certificate item-certificate__bordered">
                                <img src="assets/images/certificates/acsm.png" className="img-responsive" alt="" />
                            </div>
                        </Col>
                        <Col xs={6} lg={3}>
                            <div className="item-certificate item-certificate__bordered">
                                <img src="assets/images/certificates/operator.png" className="img-responsive" alt="" />
                            </div>
                        </Col>
                        <Col xs={6} lg={3}>
                            <div className="item-certificate item-certificate__bordered">
                                <img src="assets/images/certificates/post-production.png" className="img-responsive" alt="" />
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={4}>
                            <div className="item-certificate item-certificate__udemy">
                                <img src="assets/images/certificates/udemy-4.png" className="img-responsive" alt="" />
                            </div>
                        </Col>
                        <Col xs={4}>
                            <div className="item-certificate item-certificate__udemy">
                                <img src="assets/images/certificates/udemy-2.png" className="img-responsive" alt="" />
                            </div>
                        </Col>
                        <Col xs={4}>
                            <div className="item-certificate item-certificate__udemy">
                                <img src="assets/images/certificates/udemy-7.png" className="img-responsive" alt="" />
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={6} lg={3}>
                            <div className="item-certificate item-certificate__udemy">
                                <img src="assets/images/certificates/udemy-1.png" className="img-responsive" alt="" />
                            </div>
                        </Col>
                        <Col xs={6} lg={3}>
                            <div className="item-certificate item-certificate__udemy">
                                <img src="assets/images/certificates/udemy-5.png" className="img-responsive" alt="" />
                            </div>
                        </Col>
                        <Col xs={6} lg={3}>
                            <div className="item-certificate item-certificate__udemy">
                                <img src="assets/images/certificates/udemy-6.png" className="img-responsive" alt="" />
                            </div>
                        </Col>
                        <Col xs={6} lg={3}>
                            <div className="item-certificate item-certificate__udemy">
                                <img src="assets/images/certificates/udemy-3.png" className="img-responsive" alt="" />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </section>
);
