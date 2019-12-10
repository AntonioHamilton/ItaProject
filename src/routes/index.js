import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from '../pages/Home/index'
import Postar from '../pages/Postar'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path = "/admin/postar" component={Postar}></Route>
        </Switch>
    </BrowserRouter>
)

export default Routes;