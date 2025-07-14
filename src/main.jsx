import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app';
import './index.css';

const container = document.getElementById('root');
if (!container) {
  throw new Error("Root container not found");
}
const root = ReactDOM.createRoot(container);



root.render(
  <App />
)
