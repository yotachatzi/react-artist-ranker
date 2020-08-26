import React from 'react';
import ReactDOM from 'react-dom';
import { ArtistProvider } from './store/artistContext';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ArtistProvider>
      <App />
    </ArtistProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

