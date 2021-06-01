import React from 'react';

import './index.scss';

export const Header: React.FC = () => (
    <section className="g-outer section-header">
        <div className="section-header__data">
            <h1 className="section-header__full-name">Vitaliy <span className="section-header__second-name">Kirenkov</span></h1>
        </div>
    </section>
);
