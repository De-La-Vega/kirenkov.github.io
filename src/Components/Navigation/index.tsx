import * as React from 'react';

import { IMenuItem } from '../../models';
import { scrollTo } from '../../Utils';

import navigationJson from '../../Resources/navigation.json';

import './index.scss';

export class Navigation extends React.Component<{}, {}> {
    public componentWillUnmount (): void {
        window.removeEventListener('scroll', this.handleScroll);
    }

    public componentDidMount (): void {
        window.addEventListener('scroll', this.handleScroll);
    }

    public handleScroll = (): void => {
        const body = document.getElementsByTagName('body')[0];
        const scrolled = window.pageYOffset || document.documentElement.scrollTop;

        const header: any = document.getElementsByClassName('section-header')[0];
        const headerHeight = header.offsetHeight;

        const nav: any = document.getElementsByClassName('section-nav')[0];
        const navHeight = nav.offsetHeight;

        if (scrolled > headerHeight - navHeight) {
            body.classList.add('body-fixed');
        } else {
            body.classList.remove('body-fixed');
        }
    }

    /**
     * Toggle adaptive nav.
     */
    public toggleAdaptiveNav = (): void => {
        const body = document.getElementsByTagName('body')[0];
        const navList = document.getElementsByClassName('nav-list')[0];

        if (!body.classList.contains('body-fixed')) {
            scrollTo('section-about');
        }

        navList.classList.toggle('active');
    }

    /**
     * Scroll to section.
     */
    public handleClickScrollTo = (event: React.SyntheticEvent<HTMLAnchorElement>, className: string): void => {
        event.preventDefault();

        document.getElementsByClassName('nav-list')[0].classList.remove('active');

        scrollTo(className);
    }

    public render (): JSX.Element {
        return (
            <div className="g-outer section-nav">
                <div className="container g-inner">
                    <div className="row">
                        <div className="col-xs-9 col-md-4">
                            <a href="#" className="section-nav__logo" onClick={(e) => this.handleClickScrollTo(e, 'section-header')}>
                                Vitaliy <span className="section-nav__logo-secondary">Kirenkov</span>
                            </a>
                        </div>
                        <div className="col-xs-3 col-md-8 navigation text-right">
                            <button
                                className="nav-toggle"
                                onClick={this.toggleAdaptiveNav}
                            >
                                <i className="nav-toggle-stripe" />
                                <i className="nav-toggle-stripe" />
                                <i className="nav-toggle-stripe" />
                            </button>

                            <ul className="nav-list">
                                {navigationJson.map((item: IMenuItem, index: number) => item.isVisible ?
                                    (
                                        <li key={index}>
                                            <a href="#" onClick={(e) => this.handleClickScrollTo(e, item.link)}>
                                                {item.label}
                                            </a>
                                        </li>
                                    ) : null
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
