import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import './styles/main.scss'

import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Router, Route, browserHistory } from 'react-router'
import { routerReducer, syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import reducer from './reducer'

import { App } from './components/App'
import { Login } from './components/Login'
import { Signup } from './components/Signup'

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
  applyMiddleware(thunk),
  DevTools.instrument()
)

const history = syncHistoryWithStore(browserHistory, store)

const app = document.getElementById('app')

render(<Provider store={store}>
  <div>
    <Router history={history}>
      <Route path='/' component={App}>
        <Route path='/signup' component={Signup} />
        <Route path='/login' component={Login} />
        //TODO Add Your Routes Here
      </Route>
    </Router>
    <DevTools />
  </div>
</Provider>, app)