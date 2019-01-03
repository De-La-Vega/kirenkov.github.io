import * as React from 'react';

import contactsJson from '../Resources/contacts.json';

export const Contacts: React.SFC = () => (
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
                    {
                        contactsJson.map((url: string, index: number) => (
                            <a
                                key={index}
                                target="_blank"
                                href={url}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
);
