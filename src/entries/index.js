import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../pages/containers/Home.jsx';

console.log('Esté es mi primer entrada!!');

const app = document.getElementById('app');

// ReactDom('que voy a renderear', 'donde lo voy a renderear');
ReactDOM.render(<Home />, app);

