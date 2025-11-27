export function SearchResultsView({ searchResults, onDishClick }) {
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