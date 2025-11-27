import "/src/teacherFetch.js"; // protection against fetch() in infinite loops
import { observable, configure, reaction } from "mobx";
import { model } from "./DinnerModel.js";
import { connectToPersistence } from "./firestoreModel.js";
configure({ enforceActions: "never", });  // we don't use Mobx actions in the Lab

export const reactiveModel = observable(model);

// const currentDishEffect = reactiveModel.currentDishEffect;
function currentDishIdACB() {
    return reactiveModel.currentDishId;
}

function currentDishEffectACB() {
    reactiveModel.currentDishEffect();
}

reaction(
    currentDishIdACB,
    currentDishEffectACB
);

// reactiveModel.doSearch(reactiveModel.searchParams);

reactiveModel.doSearch({});


connectToPersistence(reactiveModel, reaction);
// reactiveModel.ready = false;
// ------ for Lab debug purposes ----------
// making the reactive model available at the browser JavasScript Console
window.myModel= reactiveModel;

// making some example dishes available 
import { dishesConst } from "/src/dishesConst.js";
window.dishesConst = dishesConst;


export default reactiveModel;