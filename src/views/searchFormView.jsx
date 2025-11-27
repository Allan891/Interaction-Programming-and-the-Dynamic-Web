export function SearchFormView({
    dishTypeOptions = [],
    text = "",
    type = "",
    onTextChange,
    onTypeChange,
    onSearchButton,}) 
    {
    function textACB(e) {
        onTextChange(e.target.value);
    }

    function typeACB(e) {
        onTypeChange(e.target.value);
    }

    function searchACB(e) {
        onSearchButton();
    }

    function summaryACB() {
        window.location.hash = "#/summary";
    }

    function dishTypeOptionsCB(optionString) {
        return (
            <option key={optionString} value={optionString}>
                {optionString}
            </option>
        );
    }
    
        return (
            <div>

                <input
                    value={text || ""}
                    onChange={textACB}
                />

                <select value={type || ""} 
                        onChange={typeACB}>

                    <option value="">Choose:</option>
                    {dishTypeOptions.map(dishTypeOptionsCB)}
                </select>

                <button onClick={searchACB}>
                    Search
                </button>
                <button onClick={summaryACB}>
                    Summary
                </button>
            
            </div>
            
        );

}