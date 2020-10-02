import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";
import App from "./App";
import { StateProvider } from './components/context/StateProvider'
import { reducer, initialState } from './components/context/reducer'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <StateProvider reducer={reducer} initialState={initialState}>
        <App />
    </StateProvider> , 
     document.getElementById('root'));

registerServiceWorker();