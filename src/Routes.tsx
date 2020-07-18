import * as React from "react";
import { NavLink } from "react-router-dom";

const Routes = () => (
  <nav role="navigation" className="menu">
    <ul>
      <li>
        <NavLink exact to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/repos">Repos</NavLink>
      </li>
    </ul>
  </nav>
);

export default Routes;