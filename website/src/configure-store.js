import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createHistory from 'history/createBrowserHistory'

import thunk from 'redux-thunk';

import reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const history = createHistory()
const middleware = routerMiddleware(history)

const persistConfig = {
  key: 'on-my-travel',
  storage,
}

export default () => {
  let store = createStore(
    persistReducer(persistConfig, reducers),
    composeEnhancers(applyMiddleware(thunk, middleware))
  )
  let persistor = persistStore(store)
  return { store, persistor, history }
}