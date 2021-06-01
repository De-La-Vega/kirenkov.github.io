import React, { useEffect } from 'react';
import { Container } from 'reactstrap';

import { IMenuItem } from '../../models';
import { scrollTo } from '../../Utils';

import navigationJson from '../../Resources/navigation.json';

import './index.scss';

export const Navigation: React.FC = () => {
    const handleScroll = (): void => {
        const header: HTMLDivElement = document.querySelector('.section-header');
        const nav: HTMLDivElement = document.querySelector('.section-nav');
        const scrolled = window.pageYOffset || document.documentElement.scrollTop;
        const headerHeight = header.offsetHeight;
        const navHeight = nav.offsetHeight;

        nav.classList.toggle('section-nav--fixed', scrolled > headerHeight - navHeight);
    };

    useEffect(
        () => {
            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        },
        []
    );

    /**
     * Toggle adaptive nav.
     */
    const toggleAdaptiveNav = (): void => {
        if (!document.querySelector('.section-nav').classList.contains('section-nav--fixed')) {
            scrollTo('section-about');
        }

        document.querySelector('.section-nav__list').classList.toggle('section-nav__list--active');
    };

    /**
     * Scroll to section.
     */
    const handleClickScrollTo = (event: React.SyntheticEvent<HTMLAnchorElement>, className: string): void => {
        event.preventDefault();

        document.querySelector('.section-nav__list').classList.remove('section-nav__list--active');

        scrollTo(className);
    };

    return (
        <nav className="g-outer section-nav">
            <Container className="g-inner">
                <div className="section-nav__wrapper">
                    <a href="#" className="section-nav__full-name" onClick={(e) => handleClickScrollTo(e, 'section-header')}>
                        Vitaliy <span className="section-nav__second-name">Kirenkov</span>
                    </a>
                    <div className="section-nav__navigation">
                        <button
                            role="button"
                            aria-label="Toggle nav"
                            className="nav-toggle"
                            onClick={toggleAdaptiveNav}
                        >
                            <i className="nav-toggle__stripe" />
                            <i className="nav-toggle__stripe" />
                            <i className="nav-toggle__stripe" />
                        </button>

                        <ul className="section-nav__list">
                            {navigationJson.map((item: IMenuItem, index: number) => item.isVisible ?
                                (
                                    <li key={index} className="section-nav__item">
                                        <a href="#" onClick={(e) => handleClickScrollTo(e, item.link)} className="section-nav__link">
                                            {item.label}
                                        </a>
                                    </li>
                                ) : null
                            )}
                        </ul>
                    </div>
                </div>
            </Container>
        </nav>
    );
};
