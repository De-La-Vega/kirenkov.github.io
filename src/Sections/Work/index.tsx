import * as React from 'react';

import { ChronologyItem } from '../../Components/ChronologyItem';
import { IItem } from '../../models';

import workJson from '../../Resources/work.json';

export const Work: React.SFC = () => (
    <div className="g-outer section-work section-indent">
        <div className="container g-inner">
            <h2 className="text-center">Work <span>experience</span></h2>

            <div>
                {
                    workJson.map((item: IItem, index: number) => item.isActive && (
                        <ChronologyItem item={item} key={`work-${index}`} />
                    ))
                }
            </div>
        </div>
    </div>
);
