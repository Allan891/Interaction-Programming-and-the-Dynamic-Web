export function DetailsView(props) {
  function navigateToSearch() {
    window.location.hash = "#/search";
  }

  function handleAddToMenuACB() {
    props.onAddToMenu();
    navigateToSearch();
  }

  function handleCancelACB() {
    navigateToSearch();
  } 
      

  return (
    <div className="details-view">
        <div>
            <button disabled={props.isDishInMenu} onClick={handleAddToMenuACB}>
              Add to menu
            </button>
            <button onClick={handleCancelACB}>Cancel</button>
        </div>

        <div>{props.dishData.title}</div>

        <img className="dish-image" src={props.dishData.image} alt={props.dishData.title} />

        <div className="dish-price">
            <div>Price {props.dishData.pricePerServing}</div>
            <div>
            For {props.guests} guest{props.dishData.pricePerServing * props.guests}
            </div>
        </div>

        <div>
          <a
            href={props.dishData.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to recipe
          </a>
        </div>

        <div className="dish-instructions">
          {props.dishData.instructions}
        </div>
        <div className="dish-instructions">
          {props.dishData.extendedIngredients.map(IngredientsCB)}
        </div>
    </div>
    
    );
    
    function IngredientsCB(ingrId){
        return (
            <div key={ingrId.id} >
                {ingrId.name}: {ingrId.amount}: {ingrId.unit}

            </div>
        );
    }
}