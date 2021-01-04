import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Loader from './components/loader/Loader';
import { StateProvider } from '../src/Reducer/stateProvider';
import reducer, { initialState } from '../src/Reducer/reducer';

ReactDOM.render(
  <React.StrictMode>
    <Loader/>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


