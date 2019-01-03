import * as React from 'react';

import { ChronologyItem } from '../Components/ChronologyItem';
import { IItem } from '../models';

import resumeJson from '../Resources/resume.json';

export const Resume: React.SFC = () => (
    <div className="g-outer section-resume section-indent">
        <div className="container g-inner">
            <h2 className="text-center">Work <span>experience</span></h2>

            <div className="l-chronology">
                {
                    resumeJson.map((item: IItem, index: number) => item.isActive && (
                        <ChronologyItem item={item} key={`resume-${index}`} />
                    ))
                }
            </div>
        </div>
    </div>
);
