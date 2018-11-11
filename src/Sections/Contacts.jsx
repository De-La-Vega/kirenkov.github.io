import React from 'react';
import { map } from 'lodash';

import DATA_FOOTER from '../Resources/footer.json';

export default class Contacts extends React.Component {
    renderList () {
        let list = map(DATA_FOOTER, (item, index) => {
            return (
                <a
                    key={index}
                    target="_blank"
                    href={item.link}
                    className={`icon-social ${item.iconClassName}`}
                />
            );
        });

        return (
            <div>
                {list}
            </div>
        )
    }

    render () {
        return (
            <div className="g-outer section-contacts section-indent">
                <div className="container g-inner">
                    <h2 className="text-center">Contact <span>me</span></h2>

                    <div className="row">
                        <div className="contacts-col col-xs-12 col-sm-3 col-sm-offset-1">
                            <div className="contacts-item base-text">
                                <strong>E-mail:</strong>
                                <br />
                                <a href="mailto:kirenkov.vitaliy@gmail.com" className="base-link">kirenkov.vitaliy@gmail.com</a>
                            </div>
                        </div>

                        <div className="contacts-col col-xs-12 col-sm-3">
                            <div className="contacts-item base-text">
                                <strong>Skype:</strong>
                                <br />
                                de_la_vega666
                            </div>
                        </div>

                        <div className="contacts-col col-xs-12 col-sm-4">
                            {this.renderList()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}