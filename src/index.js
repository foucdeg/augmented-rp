import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Reacteroids } from './Reacteroids';
import './style.css';


ReactDOM.render(<Reacteroids />, document.getElementById('root'));
registerServiceWorker();
