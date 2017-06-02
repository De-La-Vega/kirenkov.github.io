import React from 'react';
import GoogleMapReact from 'google-map-react';

import ContactsForm from '../Components/ContactsForm';

export default class Contacts extends React.Component {
    render () {
        return (
            <div className="g-outer section-contacts section-indent">

                <div className="b-map" id="init-map">
                    <GoogleMapReact
                        bootstrapURLKeys={{key: 'AIzaSyBFlyfFw41cwlTapa2ikIGb0FrYXmGkvk8'}}
                        defaultCenter={{lat: 55.751244, lng: 37.618423}}
                        defaultZoom={12}
                    />
                </div>

                <div className="container g-inner text-center">
                    <h2 className="inverted">Contact <span>me</span></h2>
                    <h3 className="inverted">Get in touch</h3>

                    <div className="contacts-container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-4">
                                <div className="item-contact">
                                    <div className="icon"><span className="icon-contact icon-mail-alt"></span></div>
                                    <div className="text base-text"><strong>E-mail:</strong><br /><a href="mailto:kirenkov.vitaliy@gmail.com">kirenkov.vitaliy@gmail.com</a></div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-4">
                                <div className="item-contact">
                                    <div className="icon"><span className="icon-contact icon-phone"></span></div>
                                    <div className="text base-text"><strong>Phone:</strong><br />+7 (916) 961-71-95</div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-4">
                                <div className="item-contact">
                                    <div className="icon"><span className="icon-contact icon-skype"></span></div>
                                    <div className="text base-text"><strong>Skype:</strong><br />de_la_vega666</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}