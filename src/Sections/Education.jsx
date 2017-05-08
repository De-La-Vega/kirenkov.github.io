import React from 'react';
import {map} from 'lodash';

import DATA_EDUCATION from '../Resources/education.json';

import ChronologyItem from '../Components/ChronologyItem';

export default class Education extends React.Component {
    renderList () {
        let list = map(DATA_EDUCATION, (item, index) => {
            return item.isActive && (
                <ChronologyItem item={item} key={`education-${index}`} />
            );
        });

        return (
            <div className="l-chronology">
                {list}
            </div>
        )
    }

    render () {
        return (
            <div className="g-outer section-education section-indent">
                <div className="container g-inner">
                    <h2 className="text-center"><span>Education</span></h2>
                    <h3 className="text-center">My education</h3>

                    {this.renderList()}
                </div>
            </div>
        );
    }
}