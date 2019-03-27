import * as React from 'react';

import './index.scss';

export const Certificates: React.SFC = () => (
    <div className="g-outer section-certificates section-indent">
        <div className="container g-inner">
            <h2 className="text-center">My <span>Certificates</span></h2>

            <div className="row">
                <div className="col-xs-6">
                    <div className="item-certificate item-certificate__scrum">
                        <img src="assets/images/certificates/csm.jpg" className="img-responsive" alt="" />
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="item-certificate item-certificate__scrum">
                        <img src="assets/images/certificates/acsm.jpg" className="img-responsive" alt="" />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-xs-4">
                    <div className="item-certificate item-certificate__udemy">
                        <img src="assets/images/certificates/udemy-4.jpg" className="img-responsive" alt="" />
                    </div>
                </div>
                <div className="col-xs-4">
                    <div className="item-certificate item-certificate__udemy">
                        <img src="assets/images/certificates/udemy-2.jpg" className="img-responsive" alt="" />
                    </div>
                </div>
                <div className="col-xs-4">
                    <div className="item-certificate item-certificate__udemy">
                        <img src="assets/images/certificates/udemy-7.jpg" className="img-responsive" alt="" />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-xs-6 col-lg-3">
                    <div className="item-certificate item-certificate__udemy">
                        <img src="assets/images/certificates/udemy-1.jpg" className="img-responsive" alt="" />
                    </div>
                </div>
                <div className="col-xs-6 col-lg-3">
                    <div className="item-certificate item-certificate__udemy">
                        <img src="assets/images/certificates/udemy-5.jpg" className="img-responsive" alt="" />
                    </div>
                </div>
                <div className="col-xs-6 col-lg-3">
                    <div className="item-certificate item-certificate__udemy">
                        <img src="assets/images/certificates/udemy-6.jpg" className="img-responsive" alt="" />
                    </div>
                </div>
                <div className="col-xs-6 col-lg-3">
                    <div className="item-certificate item-certificate__udemy">
                        <img src="assets/images/certificates/udemy-3.jpg" className="img-responsive" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
);
