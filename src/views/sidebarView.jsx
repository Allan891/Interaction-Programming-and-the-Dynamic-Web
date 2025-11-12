import { dishType, menuPrice, sortDishes } from "/src/utilities.js";
import "/src/style.css";

export function SidebarView(props){

    function onIncreaseACB(){
        props.onNumberChange(props.number + 1);
    } 
    
    function onDecreaseACB(){
        props.onNumberChange(props.number - 1);
    }

    return (
        <div>
            <button onClick={onDecreaseACB} disabled={props.number === 1}>-</button>
            {props.number}
            <button onClick={onIncreaseACB}>+</button>
            
            <table>
                <tbody>
                    {sortDishes(props.dishes).map(rowDishCB) }
                    
                    <tr>
                        <td></td>
                        <td>Total:</td>
                        <td></td>
                        <td className="number">{(menuPrice(props.dishes) * props.number).toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    ); 



    function rowDishCB(dish){
        function onRemoveDishACB() {
            console.log("Remove dish:", dish.id, dish.title);
            props.onRemoveDish(dish);
        }

        function onOpenDishACB() {
            props.onDishInterest(dish);
        }
                    
        return(
            <tr key={dish.id}>
                <td><button onClick={onRemoveDishACB}>x</button></td>
                <td><a href="#" onClick={onOpenDishACB}>{dish.title}</a></td>
                <td>{dishType(dish)}</td>
                <td className="number">{(dish.pricePerServing * props.number).toFixed(2)}</td>
            </tr>
        );
    }                
}
