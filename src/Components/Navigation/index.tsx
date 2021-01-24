import React, { useEffect } from 'react';
import { Container } from 'react-grid-system';

import { IMenuItem } from '../../models';
import { scrollTo } from '../../Utils';

import navigationJson from '../../Resources/navigation.json';

import './index.scss';

export const Navigation: React.FC = () => {
    const { body } = document;

    const handleScroll = (): void => {
        const scrolled = window.pageYOffset || document.documentElement.scrollTop;

        const header: HTMLDivElement = document.querySelector('.section-header');
        const headerHeight = header.offsetHeight;

        const nav: HTMLDivElement = document.querySelector('.section-nav');
        const navHeight = nav.offsetHeight;

        if (scrolled > headerHeight - navHeight) {
            body.classList.add('body-fixed');
        } else {
            body.classList.remove('body-fixed');
        }
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
        if (!body.classList.contains('body-fixed')) {
            scrollTo('section-about');
        }

        document.querySelector('.nav-list').classList.toggle('active');
    };

    /**
     * Scroll to section.
     */
    const handleClickScrollTo = (event: React.SyntheticEvent<HTMLAnchorElement>, className: string): void => {
        event.preventDefault();

        document.querySelector('.nav-list').classList.remove('active');

        scrollTo(className);
    };

    return (
        <nav className="g-outer section-nav">
            <Container className="g-inner">
                <div className="section-nav__wrapper">
                    <a href="#" className="section-nav__logo" onClick={(e) => handleClickScrollTo(e, 'section-header')}>
                        Vitaliy <span className="section-nav__logo-secondary">Kirenkov</span>
                    </a>
                    <div className="section-nav__navigation">
                        <button
                            role="button"
                            className="nav-toggle"
                            onClick={toggleAdaptiveNav}
                        >
                            <i className="nav-toggle-stripe" />
                            <i className="nav-toggle-stripe" />
                            <i className="nav-toggle-stripe" />
                        </button>

                        <ul className="nav-list">
                            {navigationJson.map((item: IMenuItem, index: number) => item.isVisible ?
                                (
                                    <li key={index}>
                                        <a href="#" onClick={(e) => handleClickScrollTo(e, item.link)}>
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
