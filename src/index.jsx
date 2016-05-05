import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import './styles/main.scss'

import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { routerReducer, syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import reducer from './reducer'

import { App } from './components/App'

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey='ctrl-h' changePositionKey='ctrl-q'>
    <LogMonitor theme='tomorrow' preserveScrollTop={false} />
  </DockMonitor>
)

const reducers = combineReducers({
  reducer,
  routing: routerReducer
})

const store = createStore(
  reducers,
  DevTools.instrument()
)

const history = syncHistoryWithStore(browserHistory, store)

const app = document.getElementById('app')

render(<Provider store={store}>
  <div>
    <Router history={history}>
      <Route path='/' component={App}>
      </Route>
    </Router>
    <DevTools/>
  </div>
</Provider>, app)
