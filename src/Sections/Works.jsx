import React from 'react';
import { map } from 'lodash';

import DATA_WORK from '../Resources/work.json';

const IMAGES = [
    [
        require("../../assets/img/work-moscow-restaurants.jpg"),
        require("../../assets/img/work-exelum.jpg"),
        require("../../assets/img/work-lot49.jpg")
    ],
    [
        require("../../assets/img/work-enplus.jpg"),
        require("../../assets/img/work-jk-marinsky.jpg"),
        require("../../assets/img/work-perfekto.jpg")
    ]
]

export default class Works extends React.Component {
    renderList () {
        let list = map(DATA_WORK, (row, index) => {
            return (
                <div className="l-works-row" key={index}>
                    {map(row, (col, key) => {
                        return (
                            <div className="l-works-col" key={key}>
                                <a
                                    className="l-works-col-link"
                                    href={col.linkHref}
                                    style={{backgroundImage: 'url(' + IMAGES[index][key] + ')'}}
                                    target="_blank"
                                >
                                    <span className="overlay">
                                        <span className="bg"></span>
                                        <span className="text text-uppercase">{col.label}</span>
                                    </span>
                                </a>
                            </div>
                        )
                    })}
                </div>
            );
        });

        return (
            <div className="l-works">
                {list}
            </div>
        )
    }

    render () {
        return true ? null : (
            <div className="g-outer section-works section-indent">
                <div className="container g-inner text-center">
                    <h2>Browse my <span>recent works</span></h2>
                </div>

                <div className="l-works-wrapper">
                    {this.renderList()}
                </div>
            </div>
        );
    }
}