import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MyWork from "../components/MyWork";
import Photography from "../components/Photography";

const Root = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={MyWork} />
                <Route exact path="/aboutme" component={MyWork} />
                <Route path="/photography" component={Photography} />
            </Switch>
        </Router>
    );
};

export default Root;
