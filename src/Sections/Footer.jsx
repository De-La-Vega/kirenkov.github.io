import React from 'react';

export default class Footer extends React.Component {
    render () {
        return true ? null : (
            <div className="g-outer section-footer">
                <div className="container g-inner text-center base-text">
                    <div className="section-footer__name">Vitaliy Kirenkov</div>
                    <div className="section-footer__copyright">&copy; {(new Date()).getFullYear()}</div>
                </div>
            </div>
        );
    }
}