import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import { store } from './store/index';

const render = () => {
    console.log("App render")
    ReactDOM.render(<App />, document.getElementById("root"));
}
render()

store.subscribe(render);