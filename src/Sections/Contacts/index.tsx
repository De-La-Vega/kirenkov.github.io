import * as React from 'react';

import './index.scss';

export const Contacts: React.SFC = () => (
    <div className="g-outer section-contacts section-indent">
        <div className="container g-inner text-center">
            <h2>Contact <span>me</span></h2>

            <div className="section-contacts__links">
                <div className="section-contacts__links-item section-contacts__links-item--email">
                    <a
                        href="mailto:kirenkov.vitaliy@gmail.com"
                        className="base-link section-contacts__link"
                    >
                        <i className="fas fa-envelope-square" />
                    </a>
                </div>
                <div className="section-contacts__links-item">
                    <a
                        href="https://www.facebook.com/kirenkov.vitaliy"
                        target="_blank"
                        className="base-link section-contacts__link"
                    >
                        <i className="fab fa-facebook-square" />
                    </a>
                </div>
                <div className="section-contacts__links-item">
                    <a
                        href="https://ru.linkedin.com/in/vitaliykirenkov"
                        target="_blank"
                        className="base-link section-contacts__link"
                    >
                        <i className="fab fa-linkedin" />
                    </a>
                </div>
                <div className="section-contacts__links-item">
                    <a
                        href="https://github.com/De-La-Vega/"
                        target="_blank"
                        className="base-link section-contacts__link"
                    >
                        <i className="fab fa-github-square" />
                    </a>
                </div>
                <div className="section-contacts__links-item">
                    <a
                        href="https://twitter.com/VitaliyKirenkov"
                        target="_blank"
                        className="base-link section-contacts__link"
                    >
                        <i className="fab fa-twitter-square" />
                    </a>
                </div>
            </div>
        </div>
    </div>
);
