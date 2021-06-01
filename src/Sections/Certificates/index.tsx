import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import './index.scss';

export const Certificates: React.FC = () => (
    <section className="g-outer section-certificates section-indent">
        <Container className="g-inner">
            <h2 className="text-center h2">My <span className="h2__helper">Certificates</span></h2>

            <Row>
                <Col xs="12" lg={{ offset: 1, size: 10 }} >
                    <Row>
                        <Col xs="6" lg="3">
                            <div className="section-certificates__item section-certificates__item--bordered">
                                <img src="assets/images/certificates/csm.png" className="section-certificates__img img-responsive" alt="" width="500" height="342" />
                            </div>
                        </Col>
                        <Col xs="6" lg="3">
                            <div className="section-certificates__item section-certificates__item--bordered">
                                <img src="assets/images/certificates/acsm.png" className="section-certificates__img img-responsive" alt="" width="500" height="342" />
                            </div>
                        </Col>
                        <Col xs="6" lg="3">
                            <div className="section-certificates__item section-certificates__item--bordered">
                                <img src="assets/images/certificates/operator.png" className="section-certificates__img img-responsive" alt="" width="500" height="354" />
                            </div>
                        </Col>
                        <Col xs="6" lg="3">
                            <div className="section-certificates__item section-certificates__item--bordered">
                                <img src="assets/images/certificates/post-production.png" className="section-certificates__img img-responsive" alt="" width="500" height="354" />
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs="4">
                            <div className="section-certificates__item">
                                <img src="assets/images/certificates/udemy-4.png" className="section-certificates__img img-responsive" alt="" width="500" height="373" />
                            </div>
                        </Col>
                        <Col xs="4">
                            <div className="section-certificates__item">
                                <img src="assets/images/certificates/udemy-2.png" className="section-certificates__img img-responsive" alt="" width="500" height="373" />
                            </div>
                        </Col>
                        <Col xs="4">
                            <div className="section-certificates__item">
                                <img src="assets/images/certificates/udemy-7.png" className="section-certificates__img img-responsive" alt="" width="500" height="373" />
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs="6" lg="3">
                            <div className="section-certificates__item">
                                <img src="assets/images/certificates/udemy-1.png" className="section-certificates__img img-responsive" alt="" width="500" height="373" />
                            </div>
                        </Col>
                        <Col xs="6" lg="3">
                            <div className="section-certificates__item">
                                <img src="assets/images/certificates/udemy-5.png" className="section-certificates__img img-responsive" alt="" width="500" height="373" />
                            </div>
                        </Col>
                        <Col xs="6" lg="3">
                            <div className="section-certificates__item">
                                <img src="assets/images/certificates/udemy-6.png" className="section-certificates__img img-responsive" alt="" width="500" height="373" />
                            </div>
                        </Col>
                        <Col xs="6" lg="3">
                            <div className="section-certificates__item">
                                <img src="assets/images/certificates/udemy-3.png" className="section-certificates__img img-responsive" alt="" width="500" height="373" />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </section>
);
