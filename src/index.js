// import de elemento con javascript
// const element = document.createElement("h1");
// element.innerText = "Hello, Platzi Badges!";

// const container = document.getElementById("app");

// container.appendChild(element);

// import de elemento con react
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';

import BadgeNew from './pages/BadgeNew';
import Badges from './pages/Badges';
import App from './components/App';

const container = document.getElementById('app');

ReactDOM.render(<App />, container);
