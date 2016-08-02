require('!!script!jquery');
require('bootstrap');

require('bootstrap.css');

import React from 'react';
import ReactDOM from 'react-dom';

import Application from './application/application.jsx';

ReactDOM.render(
    <Application/>,
    document.getElementById('page-content')
);
