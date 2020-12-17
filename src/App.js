import "./style.min.css";

import { Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";

import Landing from "./components/routes/Landing";
import Route1 from "./components/routes/Route1";
import Route2 from "./components/routes/Route2";
import Route3 from "./components/routes/Route3";
import Route4 from "./components/routes/Route4";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main className="route-box">
        <Route exact path="/" component={Landing} />
        <Route exact path="/pathone" component={Route1} />
        <Route exact path="/pathtwo" component={Route2} />
        <Route exact path="/paththree" component={Route3} />
        <Route exact path="/pathfour" component={Route4} />
      </main>
    </div>
  );
};

export default App;
