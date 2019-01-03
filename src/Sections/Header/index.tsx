import * as React from 'react';
// import { scrollTo } from '../Utils';

import './index.scss';

export class Header extends React.Component<{}, {}> {
    public render (): JSX.Element {
        return (
            <div className="g-outer section-header">
                <div className="data">
                    <div className="name">Vitaliy <span>Kirenkov</span></div>
                    <div className="post">Lead Front-end developer &bull; UX-architect</div>
                    {/* <div
                        className="scroll_down"
                        onClick={() => scrollTo('section-about')}
                    /> */}
                </div>
            </div>
        );
    }
}
