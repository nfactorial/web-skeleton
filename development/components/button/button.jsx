"use strict";

require('./button.sass');

import React from 'react';

/**
 * This component renders a simple HTML button and responds to the user clicking it by
 * displaying an alert.
 */
export default class FacebookSignIn extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }


    getTitle() {
        return this.props.title || 'No title';
    }

    handleClick() {
        alert('You clicked the button \'' + this.getTitle() + '\'.');
    }

    render() {
        const title = this.getTitle();

        return (
            <button className="example-button" onClick={this.handleClick}>
                {title}
            </button>
        );
    }
}
