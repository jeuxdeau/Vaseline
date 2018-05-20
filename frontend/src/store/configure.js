/* ORIGINAL ARC VER.

import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import middlewares from './middlewares'
import reducer from './reducer'
import sagas from './sagas'

const configureStore = (initialState, history) => {
  const hasWindow = typeof window !== 'undefined'
  const sagaMiddleware = createSagaMiddleware()

  const finalCreateStore = compose(
    applyMiddleware(...middlewares, sagaMiddleware, routerMiddleware(history)),
    hasWindow && window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )(createStore)

  const store = finalCreateStore(reducer, initialState)
  let sagaTask = sagaMiddleware.run(sagas)

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      const nextReducer = require('./reducer').default
      store.replaceReducer(nextReducer)
    })
    module.hot.accept('./sagas', () => {
      const nextSagas = require('./sagas').default
      sagaTask.cancel()
      sagaTask.done.then(() => {
        sagaTask = sagaMiddleware.run(nextSagas)
      })
    })
  }

  return store
}

export default configureStore
*/

import storage from 'redux-persist/es/storage'
import createAuthApiMiddleware from './middlewares/authApiMiddleware'
import { applyMiddleware, createStore } from 'redux'
import { createFilter } from 'redux-persist-transform-filter'
import { persistReducer, persistStore } from 'redux-persist'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from './reducers'

// DEFINITION : configureStore
export default (history) => {
  const persistedFilter = createFilter(
    'auth', ['access', 'refresh']
  );

  const reducer = persistReducer(
    {
      key: 'polls',
      storage: storage,
      whitelist: ['auth'],
      transforms: [persistedFilter]
    },
    rootReducer
  )

  const store = createStore(
    reducer, {},
    applyMiddleware(
      createAuthApiMiddleware(),
      routerMiddleware(history)
    )
  )

  persistStore(store)

  return store
}