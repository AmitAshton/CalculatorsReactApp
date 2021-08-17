import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
            Calculators World
          </Link>

          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  Home
                  <span class="sr-only"></span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/classic" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/classic">
                  Classic Math Calculator
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/bmi" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/bmi">
                  BMI Calculator
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/bmr" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/bmr">
                  BMR Calculator
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);