import React from 'react';
import {isNull} from 'lodash';

export default class Input extends React.Component {
    render () {
        let {placeholder, onChange, type, error} = this.props;
        return (
            <div className="form-group">
                <input
                    onChange={(e) => onChange(e.target.value)}
                    type={type}
                    className="form-control"
                    placeholder={placeholder}
                />
                {
                    !isNull(error) && (
                        <label className="error">{error}</label>
                    )
                }
            </div>
        );
    }
}