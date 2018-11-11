import React from 'react';
import { map } from 'lodash';

import DATA_RESUME from '../Resources/resume.json';

import ChronologyItem from '../Components/ChronologyItem';

export default class Resume extends React.Component {
    renderList () {
        let list = map(DATA_RESUME, (item, index) => {
            return item.isActive && (
                <ChronologyItem item={item} key={`resume-${index}`} />
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
            <div className="g-outer section-resume section-indent">
                <div className="container g-inner">
                    <h2 className="text-center">Work <span>experience</span></h2>

                    {this.renderList()}
                </div>
            </div>
        );
    }
}