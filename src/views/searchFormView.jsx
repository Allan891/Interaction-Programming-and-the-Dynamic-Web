export function SearchFormView({
    dishTypeOptions = [],
    text = "",
    type = "",
    onTextChange,
    onTypeChange,
    onSearchButton,}) 
    {
    function textCB(e) {
        onTextChange && onTextChange(e.target.value);
    }

    function typeCB(e) {
        onTypeChange && onTypeChange(e.target.value);
    }

    function searchCB(e) {
        onSearchButton && onSearchButton();
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
                    onChange={textCB}
                />

                <select value={type || ""} 
                        onChange={typeCB}>

                    <option value="">Choose:</option>
                    {dishTypeOptions.map(dishTypeOptionsCB)}
                </select>

                <button onClick={searchCB}>
                    Search!
                </button>
            
            </div>
            
        );

}
