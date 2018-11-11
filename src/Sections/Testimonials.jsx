import React from 'react';

export default class Testimonials extends React.Component {
    render () {
        return true ? null : (
            <div className="g-outer section-testimonials section-indent">
                <div className="container g-inner text-center">
                    <h2>Testimonials</h2>
                    <h3>Kind words from clients</h3>

                    <ul className="l-testimonials" data-cycle-pager-template="<li className='l-testimonials-pager-item'></li>" data-cycle-pager=".l-testimonials-pager">
                        <li className="l-testimonials-item">
                            <div className="l-testimonials-item__img">
                                <span className="l-testimonials-item__img-wrapper">
                                    <img className="l-testimonials-item__img-wrapper-image" src="img/ava-testimonial.jpg" height="150" width="150" alt="" />
                                </span>
                            </div>
                            <div className="l-testimonials-item__text base-text">testimonial text</div>
                            <div className="l-testimonials-item__name text-uppercase">testimonial author name</div>
                            <div className="l-testimonials-item__post text-uppercase base-text">testimonial author post</div>
                        </li>
                        <li className="l-testimonials-item">
                            <div className="l-testimonials-item__img">
                                <span className="l-testimonials-item__img-wrapper">
                                    <img className="l-testimonials-item__img-wrapper-image" src="img/ava-testimonial.jpg" height="150" width="150" alt="" />
                                </span>
                            </div>
                            <div className="l-testimonials-item__text base-text">testimonial text</div>
                            <div className="l-testimonials-item__name text-uppercase">testimonial author name</div>
                            <div className="l-testimonials-item__post text-uppercase base-text">testimonial author post</div>
                        </li>
                        <li className="l-testimonials-item">
                            <div className="l-testimonials-item__img">
                                <span className="l-testimonials-item__img-wrapper">
                                    <img className="l-testimonials-item__img-wrapper-image" src="img/ava-testimonial.jpg" height="150" width="150" alt="" />
                                </span>
                            </div>
                            <div className="l-testimonials-item__text base-text">testimonial text</div>
                            <div className="l-testimonials-item__name text-uppercase">testimonial author name</div>
                            <div className="l-testimonials-item__post text-uppercase base-text">testimonial author post</div>
                        </li>
                    </ul>

                    <ul className="l-testimonials-pager"></ul>
                </div>
            </div>
        );
    }
}