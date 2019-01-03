import * as React from 'react';

export const About: React.SFC = () => (
    <div className="g-outer section-about section-indent">
        <div className="container g-inner">
            <h2 className="text-center">About <span>me</span></h2>

            <div className="row">
                <div className="col-xs-12 col-sm-4 col-sm-offset-1 img">
                    <img src="assets/images/photo-about.jpg" className="img-responsive" alt="" />
                </div>
                <div className="col-xs-12 col-sm-7 data">
                    <div className="data base-text">
                        <p>
                            I work in web-development for <strong>11</strong> years.
                        </p>
                        <p>
                            During this time i created <strong>200+</strong> web-sites (personal, landing pages, online-stores, sites for plants and automotive companies).
                        </p>
                        <p>
                            I work with technologies such as: <strong>React.js</strong>, <strong>Redux</strong>, <strong>JavaScript</strong>, <strong>TypeScript</strong>, <strong>Webpack</strong>, <strong>Gulp</strong>, <strong>SASS</strong>, <strong>Bootstrap</strong> and etc.
                        </p>
                        <p>
                            Good in design programs: <strong>Sketch</strong>, <strong>Photoshop</strong>.
                        </p>
                        <p>
                            Also created <strong>plugin for Sketch</strong> - <a className="base-link" target="_blank" href="https://github.com/De-La-Vega/BootstrapGrid">Bootstrap grid</a>.
                        </p>
                        <p>
                            Have experience with working by <strong>Agile</strong> methodology.
                        </p>
                    </div>
                    <div className="button">
                        <a href="https://drive.google.com/open?id=0BzEzLZK8t86HSHRqT2VrMEdJT3M" className="btn-base" target="_blank">
                            Resume (en)
                        </a>

                        &nbsp;&nbsp;&nbsp;

                        <a href="https://drive.google.com/open?id=0BzEzLZK8t86Hb3hIRmlKUjZEVG8" className="btn-base" target="_blank">
                            Resume (ru)
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
