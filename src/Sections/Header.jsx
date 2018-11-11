import React from 'react';
import {scrollTo} from '../Utils';

export default class Header extends React.Component {
    componentDidMount () {
        var event = document.createEvent('HTMLEvents');
        event.initEvent('resize', true, false);

        window.onresize = function(event) {
            var header = document.getElementsByClassName("section-header")[0];
            header.style.height = window.innerHeight + 'px';
        };
        window.dispatchEvent(event);
    }

    render () {
        return (
            <div className="g-outer section-header">
                <div className="data">
                    <div className="name">Vitaliy <span>Kirenkov</span></div>
                    <div className="post">Lead Front-end developer &bull; Tech lead &bull; UX-architect</div>
                    <div
                        className="scroll_down"
                        onClick={() => scrollTo('section-about')}
                    >
                        <i className="icon-down-open"></i>
                    </div>
                </div>
            </div>
        );
    }
}