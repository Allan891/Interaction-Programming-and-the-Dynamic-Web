import "/src/teacherFetch.js"; // protection against fetch() in infinite loops
import { model } from "/src/DinnerModel.js";
import { reactive } from "vue";

export const reactiveModel=reactive(model);

// ------ for Lab debug purposes ----------
// making the reactive model available at the browser JavasScript Console
window.myModel= reactiveModel;

// making some example dishes available 
import {dishesConst} from "/src/dishesConst.js";
window.dishesConst= dishesConst;

myModel.addToMenu(dishesConst[2]); //You can test with more/different dishes