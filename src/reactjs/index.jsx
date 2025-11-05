import React from "react";
import { createRoot } from "react-dom/client";
import { reactiveModel}  from "/src/mobxReactiveModel.js";
import{ ReactRoot }from "./ReactRoot.jsx"; 

window.React= {createElement:React.createElement, Fragment:React.Fragment}; // needed in the lab because it works with both React and Vue


// mount the app in the browser page. Test at http://localhost:8080/react.html

    const rootElem = document.getElementById("root");
    const root = createRoot(rootElem);
    root.render(<ReactRoot model={reactiveModel} />);
