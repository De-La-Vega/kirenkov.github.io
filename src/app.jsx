import React from 'react';
import '../styles/index.scss';

import Header from '../src/Sections/Header';
import Navigation from '../src/Sections/Navigation';
import About from '../src/Sections/About';
import GoodAt from '../src/Sections/GoodAt';
import Resume from '../src/Sections/Resume';
import Education from '../src/Sections/Education';
import Works from '../src/Sections/Works';
import Testimonials from '../src/Sections/Testimonials';
import Contacts from '../src/Sections/Contacts';
import Footer from '../src/Sections/Footer';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Navigation />
                <About />
                <GoodAt />
                <Resume />
                <Education />
                <Works />
                <Testimonials />
                <Contacts />
                <Footer />
            </div>
        )
    }
}
