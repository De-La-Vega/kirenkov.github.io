import React from 'react';

import './index.scss';

export const Header: React.FC = () => (
    <section className="g-outer section-header">
        <div className="data">
            <h1 className="name">Vitaliy <span>Kirenkov</span></h1>
            <div className="post">Team Lead &bull; UX architect</div>
            <div className="attention">
                <div className="attention-logo">
                    <a target="_blank" href="https://www.youtube.com/channel/UCn-P_F0tfY21cfnkyv2lsRQ?sub_confirmation=1">
                        <img src="/assets/images/youtube-subscribe.png" className="img-responsive" alt="" />
                    </a>
                </div>
            </div>
        </div>
    </section>
);
