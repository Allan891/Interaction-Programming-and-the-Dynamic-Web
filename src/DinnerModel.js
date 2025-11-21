import { resolvePromise } from "./resolvePromise.js";
import { searchDishes, getDishDetails } from "./dishSource.js";

/* 
   The Model keeps the state of the application (Application State). 
   It is an abstract object, i.e. it knows nothing about graphics and interaction.
*/
export const model = {  
    numberOfGuests: 2,
    dishes: [],
    currentDishId: null,  // null means "intentionally empty"
    
    searchParams: {},
    
    searchResultsPromiseState: {},
    
    currentDishPromiseState: {},


    setCurrentDishId(dishId){
        this.currentDishId = dishId;
    },
    
    setNumberOfGuests(number){
        if (Number.isInteger(number) && number > 0){
            this.numberOfGuests = number;
        } else {
            throw new Error ("number of guests not a positive integer");
        }
    },
    
    addToMenu(dishToAdd){
        // array spread syntax exercise
        // It sets this.dishes to a new array [   ] where we spread (...) the elements of the existing this.dishes
        this.dishes = [...this.dishes, dishToAdd];

    },

    // filter callback exercise
    removeFromMenu(dishToRemove){
         function shouldWeKeepDishCB(dish){
            return dish.id !== dishToRemove.id;
         };
        this.dishes = this.dishes.filter(shouldWeKeepDishCB);
    },
    
    
    setSearchQuery(query){
        this.searchParams.query = query;
    },


    setSearchType(type) {
        this.searchParams.type = type;
    },

    doSearch(params) {
        resolvePromise(
            searchDishes(params),
            this.searchResultsPromiseState
        );
    },



    currentDishEffect(){
    if (!this.currentDishId){
        this.currentDishPromiseState.promise = null;
        this.currentDishPromiseState.data = null;
        this.currentDishPromiseState.error = null;
        return;
    }

    const prms = getDishDetails(this.currentDishId);
    resolvePromise(prms, this.currentDishPromiseState);
    },
        
};