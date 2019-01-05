import * as React from 'react';

import { IItem } from '../../models';

import './index.scss';

interface IProps {
    item: IItem;
}

export const ChronologyItem: React.SFC<IProps> = ({ item }) => {
    const { companyName, location, responsibilities, period } = item;

    return (
        <div className="chronology-item">
            <div className="row">
                <div className="col-xs-12 col-sm-10 col-sm-offset-1">
                    <div className="row">
                        <div className="col-xs-12 col-sm-5 col-md-3 col-left">
                            <div className="date text-uppercase">
                                <table>
                                    <tbody>
                                        <tr className="months">
                                            <td>{period.start.month}</td>
                                            <td />
                                            <td className="color-green">{period.end ? period.end.month : null}</td>
                                        </tr>
                                        <tr className="years">
                                            <td>{period.start.year}</td>
                                            <td className="divider">-</td>
                                            <td className="color-green">{period.end ? period.end.year : 'NOW'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-7 col-md-9 col-right">
                            <div className="data">
                                <div className="title text-uppercase">
                                    {companyName} <span className="color-green">{`(${location.country}, ${location.city})`}</span>
                                </div>
                                <div className="text base-text">
                                    <ul>
                                        {
                                            responsibilities.map((responsibility, index) => typeof responsibility === 'string' ? (
                                                <li key={responsibility} className="responsibility--string">
                                                    {responsibility}
                                                </li>
                                            ) : (
                                                <li key={responsibility.program || index} className="responsibility--object">
                                                    <div>
                                                        <div>
                                                            <strong>{responsibility.company}</strong>
                                                        </div>
                                                        {
                                                            responsibility.program && (
                                                                <div>{responsibility.program}: <u>{responsibility.position}</u></div>
                                                            )
                                                        }
                                                        <ul>
                                                            {responsibility.data.map((nestedResponsibility) => (
                                                                <li key={nestedResponsibility}>{nestedResponsibility}</li>
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
        </div>
    );
};
