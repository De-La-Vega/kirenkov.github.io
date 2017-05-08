import React from 'react';

export default class About extends React.Component {
    render () {
        return (
            <div className="g-outer section-about section-indent">
                <div className="container g-inner">
                    <h2 className="text-center">About <span>me</span></h2>
                    <h3 className="text-center lead-text">Senior Front-end developer &bull; Team lead &bull; UX-architect</h3>

                    <div className="row">
                        <div className="col-xs-12 col-sm-4 col-sm-offset-1 img">
                            <img src={require("../../assets/img/photo-about.jpg")} className="img-responsive" alt="" />
                        </div>
                        <div className="col-xs-12 col-sm-7 data">
                            <div className="data base-text">
                                <p>
                                    I work in web-development for <strong>9</strong> years.
                                </p>
                                <p>
                                    During this time i created <strong>200+</strong> web-sites (personal, landing pages, online-stores, sites for plants and automotive companies).
                                </p>
                                <p>
                                    I work with technologies such as: <strong>React.js</strong>, <strong>Reflux.js</strong>, <strong>Redux</strong>, <strong>JavaScript</strong>, <strong>TypeScript</strong>, <strong>Webpack</strong>, <strong>Gulp</strong>, <strong>LESS</strong>, <strong>SASS</strong>, <strong>Bootstrap</strong> and etc.
                                </p>
                                <p>
                                    Good in design programs: <strong>Photoshop</strong>, <strong>Sketch</strong>.
                                </p>
                                <p>
                                    Also created <strong>plugin for Sketch</strong> - <a target="_blank" href="https://github.com/De-La-Vega/BootstrapGrid">Bootstrap grid</a>.
                                </p>
                                <p>
                                    Have experience with working by <strong>Agile</strong> methodology.
                                </p>
                            </div>
                            <div className="button">
                                <a href="https://drive.google.com/open?id=0BzEzLZK8t86HSHRqT2VrMEdJT3M" className="btn-base" target="_blank">
                                    Resume (en) <i className="icon-download-alt hidden-xs"></i>
                                </a>

                                &nbsp;&nbsp;&nbsp;

                                <a href="https://drive.google.com/open?id=0BzEzLZK8t86Hb3hIRmlKUjZEVG8" className="btn-base" target="_blank">
                                    Resume (ru) <i className="icon-download-alt hidden-xs"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}