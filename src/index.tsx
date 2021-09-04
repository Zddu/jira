import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {loadDevTools} from "jira-dev-tool";
import { AuthProviders } from "./context";

loadDevTools(() => ReactDOM.render(
  <React.StrictMode>
    <AuthProviders>
      <App />
    </AuthProviders>
  </React.StrictMode>,
  document.getElementById('root')
))

