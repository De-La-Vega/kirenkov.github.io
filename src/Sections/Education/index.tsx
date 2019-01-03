import * as React from 'react';

import { IItem } from '../../models';

import { ChronologyItem } from '../../Components/ChronologyItem';
import educationJson from '../../Resources/education.json';

export const Education: React.SFC = () => (
    <div className="g-outer section-education section-indent">
        <div className="container g-inner">
            <h2 className="text-center">My <span>education</span></h2>

            <div>
                {
                    educationJson.map((item: IItem, index: number) => item.isActive && (
                        <ChronologyItem item={item} key={`education-${index}`} />
                    ))
                }
            </div>
        </div>
    </div>
);
