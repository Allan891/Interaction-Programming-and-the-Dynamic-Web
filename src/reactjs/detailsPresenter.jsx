import { observer } from "mobx-react-lite";
import { SuspenseView } from "../views/suspenseView.jsx";
import { DetailsView } from "../views/detailsView.jsx";

function DetailsRender(props) {
    const model = props.model;
    const promiseState = model.currentDishPromiseState;
    const dishData = promiseState && promiseState.data;
    const guests = model.numberOfGuests;

    if (!dishData) {
        return (
            <SuspenseView
                promise={promiseState && promiseState.promise}
                error={promiseState && promiseState.error}
            />
        );
    }

    function isDishInMenuCB(dish) {
        return dish.id === dishData.id;
    }

    const foundDish = model.dishes.find(isDishInMenuCB);
    const isDishInMenu = !!foundDish;

    
    function addExtraDishACB() {
        const currentDish = model.currentDishPromiseState && model.currentDishPromiseState.data;
        model.addToMenu(currentDish);
    }

    return (
        <DetailsView
            dishData={dishData}
            guests={guests}
            isDishInMenu={isDishInMenu} 
            onAddToMenu={addExtraDishACB}
        />
    );
}

export const Details = observer(DetailsRender);