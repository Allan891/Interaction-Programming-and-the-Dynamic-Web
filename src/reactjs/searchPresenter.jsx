import { observer } from "mobx-react-lite";
import { SearchFormView } from "../views/searchFormView.jsx";
import { SearchResultsView } from "../views/searchResultsView.jsx";
import { SuspenseView } from "../views/suspenseView.jsx";

const dishTypeOptions = ["starter", "main course", "dessert"];

export const Search = observer(function SearchRender({ model }) {
    const { promise, data, error } = model.searchResultsPromiseState || {};
    const { query, type } = model.searchParams || {};

    function searchTextACB(text) {
        model.setSearchQuery(text);
    }

    function searchTypeACB(type) {
        model.setSearchType(type);
    }

    function searchNowACB() {
        model.doSearch(model.searchParams);
    }

    function dishChosenACB(dish) {
        model.setCurrentDishId(dish.id);
    }

    return (
        <div>
            <SearchFormView
                dishTypeOptions={dishTypeOptions}
                text={query}               
                type={type}
                onTextChange={searchTextACB}
                onTypeChange={searchTypeACB}
                onSearchButton={searchNowACB}
                
            />

            {data ? (
                <SearchResultsView searchResults={data} onDishClick={dishChosenACB} />
            ) : (
                <SuspenseView promise={promise} error={error} />
            )}
        </div>
    );
});