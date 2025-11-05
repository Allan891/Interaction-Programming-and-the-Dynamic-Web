import { createApp, h } from "vue";

window.React= {createElement:h};  // needed in the lab because it works with both React and Vue
import VueRoot from "./VueRoot.jsx";
import {reactiveModel} from "/src/vueReactiveModel.js";
// mount the app in the browser page. Test at http://localhost:8080/vue.html
const app= createApp({
    functionrender(){ 
        return <VueRoot model = {reactiveModel}/>;
    }
});
app.mount("#app"); 