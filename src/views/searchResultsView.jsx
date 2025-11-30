export function SearchResultsView({ searchResults, onDishClick, query }) {

  if (!searchResults) {
    return null;
  }

  // Search finished but found nothing
  if (!searchResults || searchResults.length === 0) {
    if (!query || query.trim() === "") {
      return null;      
    }
    return <div>No dishes found. Please check the spelling!  </div>;
  }

  
  
  function searchResultCB(dish) {
    function dishClickACB() {
        onDishClick(dish);
        window.location.hash = "#/details";
    }

    return (
      <span
        key={dish.id}
        data-key={dish.id}
        className="search-result"
        style={{
          display: "inline-block",   
          textAlign: "center",
          width: "100px",
          verticalAlign: "top",
          margin: "8px",
        }}
        onClick={dishClickACB}
      >
        <img src={dish.image} height={100} alt={dish.title} />
        <div>{dish.title}</div>
      </span>
    );
  }

  return (
    <div>
      {searchResults && searchResults.map(searchResultCB)}
    </div>
  );
}