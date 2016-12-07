import React from 'react';
import ReactDOM from 'react-dom';
import MainContent from './components/MainContent.js';
import RightPanel from './components/RightPanel.js';
import FooterPanel from './components/FooterPanel.js';
import Menu from './components/Menu.js';

ReactDOM.render(<Menu />, document.getElementById('menu'));
ReactDOM.render(<MainContent />, document.getElementById('mainPanel'));
ReactDOM.render(<RightPanel />, document.getElementById('rightPanel'));
ReactDOM.render(<FooterPanel />, document.getElementById('footerPanel'));
