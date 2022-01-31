import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './components/CounterApp';
import './index.css';

ReactDOM.render(
    <CounterApp value={10} subtitulo='Un subtitulo' />,
  document.getElementById('root')
);

