import {sortIngredients} from "/src/utilities.js";
import "/src/style.css";

/* Functional JSX component. Name must start with capital letter */
export function SummaryView(props){
    function handleBackToSearchClick() {
        window.location.hash = "#/search";
    }
    return (
            <div className="debug">
              Summary for <span title="nr guests">{props.people}</span>{props.people === 1 ? " person" : " persons"}:
              <button
                onClick={handleBackToSearchClick}style={{ float: "right" }}>
                Back to Search
              </button>
              <table>
                <thead>
                  <tr>
                    <th>Ingredients</th>
                    <th>Aisle</th>
                    <th>Quantity</th>
                    <th>unit</th>
                  </tr>
                </thead>
                <tbody>
                  { //  <---- in JSX/HTML, with this curly brace, we go back to JavaScript
                    // Here Array Rendering is used to generate a table row for each element of the ingredients prop (an array) 
                    sortIngredients(props.ingredients).map(ingredientTableRowCB)
                  }
                </tbody>
              </table>
            </div>
    );
    
    /* callback for Array Rendering in TW 1.3 */
    function ingredientTableRowCB(ingr){
      const qty = ((ingr.amount ) * (props.people)).toFixed(2);
        return( <tr key={ingr.id} >
                 <td>{ingr.name}</td>
                 <td>{ingr.aisle}</td>
                 <td className="number">{qty}</td>
                 <td> {ingr.unit} </td>
               </tr>
              );
    }
}