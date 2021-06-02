import React from 'react';

import './index.scss';

export const About: React.FC = () => (
    <section className="g-outer section-about section-indent">
        <div className="container g-inner">
            <h2 className="text-center h2">About <span className="h2__helper">me</span></h2>

            <div className="row">
                <div className="col-12 col-md-4 col-lg-4 offset-lg-1">
                    <img src="assets/images/photo-about.png" className="section-about__photo img-responsive" alt="" width="350" height="350" />
                </div>
                <div className="col-12 col-md-8 col-lg-6">
                    <div className="section-about__text">
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
                            Also created <strong>plugin for Sketch</strong> (in 2017) - <a className="section-about__link" target="_blank" href="https://github.com/De-La-Vega/BootstrapGrid" rel="noopener">Bootstrap grid</a>.
                        </p>
                    </div>
                    <div className="section-about__btns">
                        <a href="https://drive.google.com/open?id=0BzEzLZK8t86HSHRqT2VrMEdJT3M" className="section-about__btn" target="_blank" rel="noopener">
                            Resume (en)
                        </a>
                        <a href="https://drive.google.com/open?id=0BzEzLZK8t86Hb3hIRmlKUjZEVG8" className="section-about__btn" target="_blank" rel="noopener">
                            Resume (ru)
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
