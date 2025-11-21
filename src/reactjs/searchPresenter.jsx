import { observer } from "mobx-react-lite";
import { SearchFormView } from "../views/searchFormView.jsx";
import { SearchResultsView } from "../views/searchResultsView.jsx";
import { SuspenseView } from "../views/suspenseView.jsx";

const dishTypeOptions = ["starter", "main course", "dessert"];

export const Search = observer(function SearchRender({ model }) {
    const { promise, data, error } = model.searchResultsPromiseState || {};
    const { query, type } = model.searchParams || {};

    function handleSearchTextChange(text) {
        model.setSearchText?.(text) ?? model.setSearchQuery?.(text);
    }

    function handleSearchTypeChange(type) {
        model.setSearchType(type);
    }

    function handleSearchNow() {
        model.doSearch(model.searchParams);
    }

    return (
        <div>
            <SearchFormView
                dishTypeOptions={dishTypeOptions}
                text={query}               
                type={type}
                onTextChange={console.log}
                onTypeChange={console.log}
                onSearch={() => console.log}
                // onTextChange={handleSearchTextChange}
                // onTypeChange={handleSearchTypeChange}
                // onSearch={handleSearchNow}
                
            />

            {data ? (
                <SearchResultsView searchResults={data} />
            ) : (
                <SuspenseView promise={promise} error={error} />
            )}
        </div>
    );
});