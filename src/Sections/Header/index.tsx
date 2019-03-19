import * as React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../consts';

import './index.scss';

export class Header extends React.Component<{}, {}> {
    public render (): JSX.Element {
        return (
            <div className="g-outer section-header">
                <div className="data">
                    <div className="name">Vitaliy <span>Kirenkov</span></div>
                    <div className="post">Lead Front-end developer &bull; UX-architect</div>
                    <div className="attention">
                        <div className="attention-logo">
                            <a target="_blank" href="https://www.youtube.com/channel/UCn-P_F0tfY21cfnkyv2lsRQ?sub_confirmation=1">
                                <img src="/assets/images/youtube-subscribe.png" className="img-responsive" alt="" />
                            </a>
                        </div>
                        <div className="attention-text">
                            Welcome to my <a target="_blank" href="https://www.youtube.com/channel/UCn-P_F0tfY21cfnkyv2lsRQ?sub_confirmation=1">YouTube channel</a>! <Link to={ROUTES.VIDEO.PATH}>View</Link> list of videos.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
