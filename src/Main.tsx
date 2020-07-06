import React from 'react';

import { Navigation } from '../src/Components/Navigation';
import { About } from '../src/Sections/About';
import { Certificates } from '../src/Sections/Certificates';
import { Contacts } from '../src/Sections/Contacts';
import { Education } from '../src/Sections/Education';
import { Header } from '../src/Sections/Header';
import { Work } from '../src/Sections/Work';

export const Main: React.FC = () => (
    <main>
        <Header />
        <Navigation />
        <About />
        <Certificates />
        <Work />
        <Education />
        <Contacts />
    </main>
);
