import React from 'react'

import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import { compose, createStore, applyMiddleware } from 'redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'

import { reducers } from './reducers/index'

export const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey='ctrl-h' changePositionKey='ctrl-q'>
    <LogMonitor theme='tomorrow' preserveScrollTop={false} />
  </DockMonitor>
)

const browserMiddleware = routerMiddleware(browserHistory)

export const store = createStore(
  reducers,
  compose(applyMiddleware(thunk, browserMiddleware), DevTools.instrument())
)

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextReducer = require('./reducers/index').default
    store.replaceReducer(nextReducer)
  })
}

export const history = syncHistoryWithStore(browserHistory, store)
