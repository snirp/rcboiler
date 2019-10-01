import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import HomePage from './HomePage'

const Routes = () =>
  <Switch>
    <Route exact path='/null' component={()=><Redirect to="/"/>} />
    <Route exact path='/' component={HomePage} />
  </Switch>

export default Routes