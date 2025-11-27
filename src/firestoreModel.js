// initialize Firebase app
import { initializeApp } from "firebase/app";
import {getFirestore, doc, setDoc, getDoc} from "firebase/firestore";

// uncomment the following lines when you have your firebaseConfig. Understand what the lines are doing!
import {firebaseConfig} from "/src/firebaseConfig.js";
const app= initializeApp(firebaseConfig);
const db= getFirestore(app);
window.db= db



// make doc and setDoc available at the Console for testing
window.doc= doc        
window.setDoc= setDoc


/* Replace NN with your TW2_TW3 group number! */
const COLLECTION="dinnerModel723";

// TODO: read the code above
// TODO: export the function connectToPersistence, it can be empty for starters

// const document= doc(db, "someCollection", "someName")
// setDoc(document, object).catch(console.error)
// setDoc(document, object, {merge:true})
// getDoc(document).then(gotCloudDataACB).catch(console.error)
// const modelRef = doc(db, COLLECTION, "sharedModel");

export function connectToPersistence(model, watchFunction) {
    model.ready = false;
    const modelRef = doc(db, COLLECTION, "sharedModel");

    function propertiesACB() {
        return [
            model.numberOfGuests,
            model.dishes,
            model.currentDishId
        ];
    }

    function persistModelACB() {
        if (!model.ready) {
            return;
        }

        const data = {numberOfGuests: model.numberOfGuests,
                      dishes: model.dishes,
                      currentDishId: model.currentDishId};
        
        
        
        setDoc(modelRef,data,{ merge: true });
        
    }
    
    
    watchFunction(propertiesACB, persistModelACB);
    
    function gotCloudDataACB(snapshot) {
        const data = snapshot.data() ?? {};
    
        model.numberOfGuests = data.numberOfGuests ?? 2;
        model.dishes = data.dishes ?? [];
        model.currentDishId = data.currentDishId ?? null;
        
        model.ready = true;
    }

    function errorHandleACB(e){
        console.error(e);
    }
    getDoc(modelRef).then(gotCloudDataACB).catch(errorHandleACB);
}