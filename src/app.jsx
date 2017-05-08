import React from 'react';
import '../styles/index.scss';

import Header from '../src/Components/Header';
import Navigation from '../src/Components/Navigation';
import About from '../src/Components/About';
import GoodAt from '../src/Components/GoodAt';
import Resume from '../src/Components/Resume';
import Education from '../src/Components/Education';
import Works from '../src/Components/Works';
import Testimonials from '../src/Components/Testimonials';
import Contacts from '../src/Components/Contacts';
import Footer from '../src/Components/Footer';

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
