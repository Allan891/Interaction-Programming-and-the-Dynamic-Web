import { ReactRoot } from "./ReactRoot.jsx";
import {createElement, Fragment} from "react";
window.React= {createElement:createElement, Fragment:Fragment}; // needed in the lab because it works with both React and Vue

import { createRoot } from "react-dom/client";
import { reactiveModel } from "../mobxReactiveModel";

const root = <ReactRoot model={reactiveModel} />;


import { searchDishes, getMenuDetails } from "../dishSource";
window.searchDishes = searchDishes;
window.getMenuDetails = getMenuDetails;



// mount the app in the browser page. Test at http://localhost:8080/react.html
createRoot(document.getElementById('root')).render(root);