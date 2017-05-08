import React from 'react';
import {map} from 'lodash';

import DATA_GOOD_AT from '../Resources/good-at.json';

export default class GoodAt extends React.Component {
    renderGoodAtList () {
        let list = map(DATA_GOOD_AT, (item, index) => {
            return (
                <li key={index}>
                    <div className="chart">
                        <div className="item-chart">
                            <div className="svg-wrapper">
                                <svg viewBox="0 0 100 100">
                                    <circle className="bg" cx="50" cy="50" r="40" />
                                    <path
                                        className="circle-back"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeWidth="6"
                                        strokeDasharray="300,300"
                                        d="M50 10 a 40 40 0 0 1 0 80 a 40 40 0 0 1 0 -80"
                                    />
                                    <path
                                        className="circle-front"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeWidth="6"
                                        strokeDasharray={item.pathLength + ",240"}
                                        d="M50 10 a 40 40 0 0 1 0 80 a 40 40 0 0 1 0 -80"
                                    />
                                </svg>
                            </div>
                            <span>{item.percentage}</span>
                        </div>
                    </div>
                    <div className="title text-uppercase">
                        {item.label}
                    </div>
                </li>
            );
        });

        return (
            <ul className="l-good-at">
                {list}
            </ul>
        )
    }

    render () {
        return (
            <div className="g-outer section-good-at section-indent">
                <div className="container g-inner text-center">
                    <h2 className="inverted">i am <span>good at</span></h2>

                    {this.renderGoodAtList()}
                </div>
            </div>
        );
    }
}