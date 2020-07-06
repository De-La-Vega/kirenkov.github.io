import React from 'react';
import { Container } from 'react-grid-system';

import { IItem } from '../../models';

import { ChronologyItem } from '../../Components/ChronologyItem';
import educationJson from '../../Resources/education.json';

export const Education: React.FC = () => (
    <section className="g-outer section-education section-indent">
        <Container className="g-inner">
            <h2 className="text-center">My <span>education</span></h2>

            <div>
                {
                    educationJson.map((item: IItem, index: number) => item.isActive && (
                        <ChronologyItem item={item} key={`education-${index}`} />
                    ))
                }
            </div>
        </Container>
    </section>
);
