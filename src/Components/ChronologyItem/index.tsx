import React from 'react';
import { Col, Row } from 'react-grid-system';

import { IItem } from '../../models';

import './index.scss';

interface IProps {
    item: IItem;
}

export const ChronologyItem: React.FC<IProps> = ({ item }) => {
    const { companyName, location, responsibilities, period } = item;

    return (
        <div className="chronology-item">
            <Row>
                <Col xs={12} lg={10} offset={{ lg: 1 }} >
                    <Row>
                        <Col xs={12} md={4}>
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
                        </Col>

                        <Col xs={12} md={8}>
                            <div className="data">
                                <div className="title text-uppercase">
                                    {companyName} <span className="color-green">{`(${location.city}, ${location.country})`}</span>
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
                                                                <>
                                                                    <div>{responsibility.program}</div>
                                                                    <div>Position - <u>{responsibility.position}</u></div>
                                                                </>
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
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};
