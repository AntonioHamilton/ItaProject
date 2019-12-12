import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from '../pages/Home/index'
import Publish from '../pages/Publish/index'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path = "/admin/postar" component={Publish}></Route>
        </Switch>
    </BrowserRouter>
)

export default Routes;