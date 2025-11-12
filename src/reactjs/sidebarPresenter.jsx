import { observer } from "mobx-react-lite";
import { SidebarView } from "/src/views/sidebarView.jsx";

const Sidebar = observer(
    function SidebarRender(props) {
        function numberChangeACB(newNumber){
            props.model.setNumberOfGuests(newNumber);
        }
        
        function dishInterestACB(chosenDish) {
            props.model.setCurrentDishId(chosenDish.id);
        }

        function removeDishACB(chosenDish) {
            props.model.removeFromMenu(chosenDish);
        }
        
        return (
            <SidebarView
                number={props.model.numberOfGuests}
                dishes={props.model.dishes}
                onNumberChange={numberChangeACB}
                onDishInterest={dishInterestACB}
                onRemoveDish={removeDishACB}
            />
        );
    }
);

export { Sidebar };
