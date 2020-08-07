
import React from 'react'
import { Route, Switch } from 'react-router'
import pageOne from './pages/pageOne';
import pageTwo from './pages/pageTwo';


function Routes() {
    return (
        <Switch>
            <Route path='/' exact component={pageOne} />
            <Route path='/pagetwo' component={pageTwo} />
            <Route
                render={function () {
                    return <h1>Not Found</h1>;
                }}
            />
        </Switch>
    )
}

export default Routes
