import * as React from 'react';

import { About } from '../src/Sections/About';
import { Contacts } from '../src/Sections/Contacts';
import { Education } from '../src/Sections/Education';
import { Header } from '../src/Sections/Header';
import { Navigation } from '../src/Sections/Navigation';
import { Resume } from '../src/Sections/Resume';

import 'styles/index.scss';

export const App: React.SFC = () => (
    <div>
        <Header />
        <Navigation />
        <About />
        <Resume />
        <Education />
        <Contacts />
    </div>
);
