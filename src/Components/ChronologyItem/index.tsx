import React from 'react';

import { IItem } from '../../models';

import './index.scss';

interface IProps {
    item: IItem;
}

export const ChronologyItem: React.FC<IProps> = ({ item }) => {
    const { companyName, location, responsibilities, period } = item;

    return (
        <div className="chronology-item">
            <div className="row">
                <div className="col-12 col-lg-10 offset-lg-1">
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <div className="chronology-period">
                                <div className="chronology-period__month-start">{period.start.month}</div>
                                <div className="chronology-period__month-end">{period.end ? period.end.month : null}</div>
                                <div className="chronology-period__year-start">{period.start.year}</div>
                                <div className="chronology-period__year-end">{period.end ? period.end.year : 'NOW'}</div>
                                <div className="chronology-period__divider">-</div>
                            </div>
                        </div>

                        <div className="col-12 col-md-8">
                            <div className="chronology-data">
                                <div className="chronology-data__title">
                                    {companyName} <span className="color-green">{`(${location.city}, ${location.country})`}</span>
                                </div>

                                <ul className="chronology-data__list">
                                    {
                                        responsibilities.map((responsibility, index) => typeof responsibility === 'string' ? (
                                            <li key={responsibility} className="chronology-data__item chronology-data__item--string">
                                                {responsibility}
                                            </li>
                                        ) : (
                                            <li key={responsibility.program || index} className="chronology-data__item chronology-data__item--object">
                                                <div className="chronology-responsibility">
                                                    <div className="chronology-responsibility__title">
                                                        {responsibility.company}
                                                    </div>
                                                    {
                                                        responsibility.program && (
                                                            <>
                                                                <div className="chronology-responsibility__program">{responsibility.program}</div>
                                                                <div className="chronology-responsibility__position">Position - <u>{responsibility.position}</u></div>
                                                            </>
                                                        )
                                                    }
                                                    <ul className="chronology-responsibility__list">
                                                        {responsibility.data.map((nestedResponsibility) => (
                                                            <li key={nestedResponsibility} className="chronology-responsibility__item">{nestedResponsibility}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
