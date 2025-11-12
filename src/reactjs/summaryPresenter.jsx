import { observer } from "mobx-react-lite";
import { SummaryView } from "/src/views/summaryView.jsx";
import { shoppingList } from "/src/utilities.js";


const Summary = observer(             
    function SummaryRender(props){
        return (<SummaryView people={props.model.numberOfGuests}
                             ingredients={shoppingList(props.model.dishes)}/>);
                
    });

export { Summary };