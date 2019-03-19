import * as React from 'react';

import { Navigation } from '../src/Components/Navigation';
import { About } from '../src/Sections/About';
import { Contacts } from '../src/Sections/Contacts';
import { Education } from '../src/Sections/Education';
import { Header } from '../src/Sections/Header';
import { Work } from '../src/Sections/Work';

import 'styles/index.scss';

export const Main: React.SFC = () => (
    <div>
        <Header />
        <Navigation />
        <About />
        <Work />
        <Education />
        <Contacts />
    </div>
);
