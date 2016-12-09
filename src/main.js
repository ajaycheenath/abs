import React from 'react';
import ReactDOM from 'react-dom';
import MainContent from './components/MainContent.js';
import Menu from './components/Menu.js';

ReactDOM.render(<Menu />, document.getElementById('menu'));
ReactDOM.render(<MainContent />, document.getElementById('mainPanel'));
