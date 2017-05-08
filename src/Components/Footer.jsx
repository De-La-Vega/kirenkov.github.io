import React from 'react';
import {map} from 'lodash';

import DATA_FOOTER from '../Resources/footer.json';

export default class Footer extends React.Component {
    renderList () {
        let list = map(DATA_FOOTER, (item, index) => {
            return (
                <a
                    key={index}
                    target="_blank"
                    href={item.link}
                    className="icon-social icon-github-circled"
                    className={`icon-social ${item.iconClassName}`}
                    
                />
            );
        });

        return (
            <div className="socials">
                {list}
            </div>
        )
    }

    render () {
        return (
            <div className="g-outer section-footer">
                <div className="container g-inner text-center">
                    {this.renderList()}
                    <div className="name">Vitaliy Kirenkov</div>
                    <div className="copyright">&copy; 2017</div>
                </div>
            </div>
        );
    }
}