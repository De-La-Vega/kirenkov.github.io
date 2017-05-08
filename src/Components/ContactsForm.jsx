import React from 'react';
import {cloneDeep} from 'lodash';

import {preventDefault} from '../Utils';

function setDefaultErrors () {
    return {
        name: false,
        email: false
    }
}

export default class ContactsForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            form: {
                name: '',
                email: '',
                message: ''
            },
            errors: setDefaultErrors(),
            formSubmitted: false
        }
    }

    handleChangeName = (e) => {
        const inputValue = e.target.value;

        this.setState((prevState) => {
            let newState = cloneDeep(prevState.form);

            newState.name = inputValue;

            return {form: newState};
        });
    };

    handleChangeEmail = (e) => {
        const inputValue = e.target.value;

        this.setState((prevState) => {
            let newState = cloneDeep(prevState.form);

            newState.email = inputValue;

            return {form: newState};
        });
    };

    handleChangeMessage = (e) => {
        const inputValue = e.target.value;

        this.setState((prevState) => {
            let newState = cloneDeep(prevState.form);

            newState.message = inputValue;

            return {form: newState};
        });
    };

    isValidName = (value) => {
        return /^[A-Za-z\s]+$/.test(value);
    }

    isValidEmail = (value) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(value);
    }

    handleSubmit = (e) => {
        preventDefault(e);

        const that = this;
        const {name, email, message} = this.state.form;
        const isValidName = this.isValidName(name);
        const isValidEmail = this.isValidEmail(email);

        if (!isValidName || !isValidEmail){
            let newState = cloneDeep(this.state.errors);

            newState.name = !isValidName;
            newState.email = !isValidEmail;

            this.setState({errors: newState});

            return;
        } else {
            this.setState({errors: setDefaultErrors()});
        }

        var request = new XMLHttpRequest();
        request.open('POST', 'https://formspree.io/kirenkov.vitaliy@gmail.com', true);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        request.responseType = 'json';
        request.send({
            name,
            email,
            message
        });
        request.onload = function() {
            if (this.status >= 200 && this.status < 400) {
                that.setState({
                    formSubmitted: true
                });
            } else {
                console.log('error');
            }
        };
    };

    render () {
        return (
            <div className="b-contacts-form">
                {
                    this.state.formSubmitted ?
                        <div className="alert alert-success form-response">Your message was sent.</div> :
                        <div>
                            <div className="form-group">
                                <input
                                    onChange={this.handleChangeName}
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                />
                                {
                                    this.state.errors.name && (
                                        <label className="error">Error</label>
                                    )
                                }
                            </div>
                            <div className="form-group">
                                <input
                                    onChange={this.handleChangeEmail}
                                    type="email"
                                    className="form-control"
                                    placeholder="E-mail"
                                />
                                {
                                    this.state.errors.email && (
                                        <label className="error">Error</label>
                                    )
                                }
                            </div>
                            <div className="form-group">
                                <textarea
                                    onChange={this.handleChangeMessage}
                                    className="form-control"
                                    placeholder="Message"
                                    rows="6"></textarea>
                            </div>
                            <div className="text-left">
                                <button
                                    onClick={this.handleSubmit}
                                    type="submit"
                                    className="btn-base"
                                >
                                    Send message
                                </button>
                            </div>
                        </div>
                }
            </div>
        );
    }
}