import React from 'react';
import ReactDOM from 'react-dom/client'; //'react-dom/client' is used instead of just 'react-dom'

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Correct way to render the root in React 18 
root.render(<App />);



