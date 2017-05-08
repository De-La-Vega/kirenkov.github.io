import React from 'react';
import {cloneDeep} from 'lodash';
import $ from "jquery";

import Input from '../Components/Input';

import {preventDefault} from '../Utils';

function setDefaultErrors () {
    return {
        name: null,
        email: null
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

    handleChangeName = (value) => {
        this.setState((prevState) => {
            let newState = cloneDeep(prevState.form);

            newState.name = value;

            return {form: newState};
        });
    };

    handleChangeEmail = (value) => {
        this.setState((prevState) => {
            let newState = cloneDeep(prevState.form);

            newState.email = value;

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

        if (!name.length || !email.length) {
            let newState = cloneDeep(this.state.errors);

            newState.name = !name.length ? 'Write your name' : null;
            newState.email = !email.length ? 'Write your email address' : null;

            this.setState({errors: newState});

            return;
        }

        if (!isValidName || !isValidEmail){
            let newState = cloneDeep(this.state.errors);

            newState.name = !isValidName ? 'Minimum 1 character' : null;
            newState.email = !isValidEmail ? 'Need a valid email address' : null;

            this.setState({errors: newState});

            return;
        } else {
            this.setState({errors: setDefaultErrors()});
        }

        // $.ajax({
        //     url: 'https://formspree.io/kirenkov.vitaliy@gmail.com', 
        //     method: 'POST',
        //     data: {
        //         name: name,
        //         email: email,
        //         message: message
        //     },
        //     dataType: 'json'
        // }).done(function(response) {
        //     that.setState({
        //         formSubmitted: true
        //     });
        // });

        var request = new XMLHttpRequest();
        var params = 'name=' + encodeURIComponent(name) + '&email=' + encodeURIComponent(email) + '&message=' + encodeURIComponent(message);
        request.open('POST', 'https://formspree.io/kirenkov.vitaliy@gmail.com', true);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        request.responseType = 'json';
        request.send(params);
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
                            <Input
                                onChange={(value) => this.handleChangeName(value)}
                                type="text"
                                placeholder="Name"
                                error={this.state.errors.name}
                            />

                            <Input
                                onChange={(value) => this.handleChangeEmail(value)}
                                type="email"
                                placeholder="E-mail"
                                error={this.state.errors.email}
                            />

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