import * as React from "react";
import { Route, Redirect } from "react-router-dom";

import Navigation from "./Routes";
import HomePage from "./pages/HomePage";
import ReposPage from "./pages/Repos";

export default () => (
  <>
    <div className="navbar">
      <Navigation />
      <hr />
    </div>
    <div className="main-content">
      <Route path="/" exact component={HomePage} />
      <Route path="/repos" component={ReposPage} />
      <Redirect to="/" />
    </div>
    <div className="footer small">
      <hr />
      Developed from scratch by{" "}
      <a
        href="https://github.com/ralflorent"
        rel="noopener noreferrer"
        target="_blank"
      >
        Ralph Florent
      </a>
    </div>
  </>
);
