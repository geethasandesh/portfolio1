import {React, Fragment} from "react";
import Routers from "../Routers/Routers";
import Header from "../components/Header/Header";
import {BrowserRouter as Router } from "react-router-dom";
function Layout() {
  return (
    <Router>
      <Fragment>
        <Header/>
          <Routers />
      </Fragment>
    </Router>
  );
}

export default Layout;
