import React from "react";
import { Switch, Route } from "react-router-dom";
import pageOne from "./pages/pageOne";
import pageTwo from "./pages/pageTwo";

function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={pageOne} />
        <Route path="/pagetwo" component={pageTwo} />
        <Route
          render={function () {
            return <div>page not found</div>;
          }}
        />
      </Switch>
    </div>
  );
}

export default Routes;
