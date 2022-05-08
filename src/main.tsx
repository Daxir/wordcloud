import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import { BrowserRouter } from 'react-router-dom';
import mockData from './mock/data.json';
import App from './components/App';

const getRandomWordCloud = () => mockData[Math.floor(Math.random() * mockData.length)];

createServer({
  routes() {
    this.namespace = 'api';
    this.get('/words', () => getRandomWordCloud());
  },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
