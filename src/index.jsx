import './styles/main.scss'

import React from 'react'
import { render } from 'react-dom'
import { Router, Route } from 'react-router'
import { Provider } from 'react-redux'

import { App } from './components/App'
import { LoginContainer } from './components/Login'
import { SignupContainer } from './components/Signup'
import { AccountContainer } from './components/Account'

import { store, history, DevTools } from './store'

const app = document.getElementById('app')

render(<Provider store={store}>
  <div>
    <Router history={history}>
      <Route path='/' component={App}>
        <Route path='/signup' component={SignupContainer} />
        <Route path='/login' component={LoginContainer} />
        <Route path='/account' component={AccountContainer} />
        //TODO Add Your Routes Here
      </Route>
    </Router>
    <DevTools />
  </div>
</Provider>, app)
