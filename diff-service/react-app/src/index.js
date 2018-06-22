import React from "react";
import "./index.css";
import {render} from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {DiffSelect, DiffView} from "./containers";
import {BrowserRouter as Router, Route} from "react-router-dom";
import reducer from "./reducers";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(reducer);

render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={DiffSelect} />
        <Route exact path="/diff" component={DiffView} />
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
