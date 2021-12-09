import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import modalReducer from "./Reducers/modalReducer";

const store = createStore(modalReducer);

ReactDOM.render(

  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,

  document.getElementById("root")
);
