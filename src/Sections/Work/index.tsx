import React from 'react';

import { ChronologyItem } from '../../Components/ChronologyItem';
import { IItem } from '../../models';

import workJson from '../../Resources/work.json';

export const Work: React.FC = () => (
    <section className="g-outer section-work section-indent">
        <div className="container g-inner">
            <h2 className="text-center h2">Work <span className="h2__helper">experience</span></h2>

            <div>
                {
                    workJson.map((item: IItem, index: number) => item.isActive && (
                        <ChronologyItem item={item} key={`work-${index}`} />
                    ))
                }
            </div>
        </div>
    </section>
);
