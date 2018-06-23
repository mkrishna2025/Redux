import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import './styles/main.css/main.css';
//import App from './App';
import MainApp from './containers/App.js';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

import { Provider } from 'react-redux';
//import { AppContainer } from 'react-hot-loader';
import { PersistGate } from 'redux-persist/lib/integration/react';
import App from './containers/App';
import Loader from './components/Loader';

import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from './store';

import { showAlert } from './actions';
import './styles/main.scss';

// https://redux-saga.react-boilerplate.com/
ReactDOM.render(
        <Provider store={store}>
            <PersistGate
              loading={<Loader />}
              persistor={persistor}
            >
              <BrowserRouter>
                <MainApp />
              </BrowserRouter>
            </PersistGate>
          </Provider>, document.getElementById('root'));
registerServiceWorker();
