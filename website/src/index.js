import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './configure-store';

import registerServiceWorker from './registerServiceWorker';

import AppRouter from './Router';

const { store, persistor, history } = configureStore();

ReactDOM.render(<AppRouter store={store} history={history} persistor={persistor}/>, document.getElementById('root'));
registerServiceWorker();
