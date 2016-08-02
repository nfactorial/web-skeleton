'use strict';

require('./application.sass');

import React from 'react';
import ExampleButton from '../components/button/button.jsx';

/**
 * This class implements the rendering of the Application.
 */
export default class Application extends React.Component {
    constructor(props) {
        super(props);
    }

    /**
     * Returns the child element to be presented to the user.
     * @returns {XML} The child element that represents our current state.
     */
    render() {
        return (
            <div>
                <h1>Example Webpage Skeleton</h1>
                <h4>Using React, Babel, Bootstrap, Sass and Webpack</h4>
                <div>
                    <ExampleButton title="Example 1"/>
                </div>
                <div>
                    <ExampleButton title="Example 2"/>
                </div>
            </div>
        );
    }
}
