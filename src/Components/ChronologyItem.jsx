import React from 'react';
import { map } from 'lodash';

export default function ChronologyItem (props) {
    const {item} = props;

    return (
        <div className="row l-chronology-item">
            <div className="col-xs-12 col-sm-10 col-sm-offset-1">
                <div className="row">
                    <div className="col-xs-12 col-sm-5 col-md-3 col-left">
                        <div className="date text-uppercase">
                            <table className="table-date">
                                <tbody>
                                <tr className="months">
                                    <td>{item.period.start.month}</td>
                                    <td></td>
                                    <td className="color-green">{item.period.end ? item.period.end.month : null}</td>
                                </tr>
                                <tr className="years">
                                    <td>{item.period.start.year}</td>
                                    <td className="divider">-</td>
                                    <td className="color-green">{item.period.end ? item.period.end.year : "NOW"}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-7 col-md-9 col-right">
                        <div className="data">
                            <div className="title text-uppercase">
                                {item.companyName} <span className="color-green">{`(${item.location.country}, ${item.location.city})`}</span>
                            </div>
                            <div className="text base-text">
                                <ul>
                                    {
                                        map(item.responsibilities, (responsibility, responsibilityIndex) => {
                                            return (
                                                <li key={responsibilityIndex}>{responsibility}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}