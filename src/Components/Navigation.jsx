import React from 'react';
import {map} from 'lodash';
import {preventDefault, scrollTo, outerHeight} from '../Utils';

import DATA_NAVIGATION from '../Resources/navigation.json';

export default class Navigation extends React.Component {
    componentDidMount () {
        var event = document.createEvent('HTMLEvents');
        event.initEvent('scroll', true, false);

        window.onscroll = function() {
            const body = document.getElementsByTagName('body')[0];
            const scrolled = window.pageYOffset || document.documentElement.scrollTop;
            const header = document.getElementsByClassName("section-header")[0];
            const headerHeight = parseInt(header.style.height.replace("px", ""));
            const nav = document.getElementsByClassName("section-nav")[0];
            const navHeight = nav.offsetHeight;

            if (scrolled > headerHeight - navHeight) {
                body.classList.add('body-fixed')
            } else {
                body.classList.remove('body-fixed');
            }
        }
        window.dispatchEvent(event);
    }

	/**
	 * Toggle adaptive nav.
	 */
    toggleAdaptiveNav () {
        const body = document.getElementsByTagName('body')[0];
        const navList = document.getElementsByClassName("nav-list")[0];

		if (!body.classList.contains('body-fixed')) {
            scrollTo('section-about');
		}

        navList.classList.toggle('active');
    }

	/**
	 * Scroll to section.
	 */
    handleClickScrollTo (e, className) {
        preventDefault(e);

        document.getElementsByClassName("nav-list")[0].classList.remove('active');

        scrollTo(className);
    }

    renderMenu () {
        let list = map(DATA_NAVIGATION, (item, index) => {
            let result = null;

            if (item.isVisible) {
                result = (
                    <li key={index}>
                        <a href="#" onClick={(e) => this.handleClickScrollTo(e, item.link)}>
                            {item.label}
                        </a>
                    </li>
                )
            }

            return result;
        });

        return (
            <ul className="nav-list">
                {list}
            </ul>
        )
    }

    render () {
        return (
            <div className="g-outer section-nav">
                <div className="container g-inner">
                    <div className="row">
                        <div className="col-xs-9 col-md-4 name">Vitaliy <span>Kirenkov</span></div>
                        <div className="col-xs-3 col-md-8 navigation text-right">
                            <button
                                className="nav-toggle"
                                onClick={this.toggleAdaptiveNav}
                            >
                                <i></i>
                                <i></i>
                                <i></i>
                            </button>
                            {this.renderMenu()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}