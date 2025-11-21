export function DetailsView(props) {
    const dishData = props.dishData;
    const guests = props.guests;
    const isDishInMenu = props.isDishInMenu;
    const onCancel = props.onCancel;

    if (!dishData) return null;

    function handleAdd() {
        const evt = new CustomEvent("dishAdd", { bubbles: true });
        window.dispatchEvent(evt);
    }

    return (
        <div className="details-view">
            <header>
                <button
                    disabled={isDishInMenu}
                    onClick={handleAdd}
                >
                    {isDishInMenu ? "Already in menu" : "Add to menu!"}
                </button>

                <button onClick={onCancel}>Cancel</button>
            </header>

            <h2>{dishData.title}</h2>

            {dishData.image && (
                <img
                    src={dishData.image}
                    alt={dishData.title}
                    className="dish-image"
                />
            )}

            <section className="dish-price">
                <h3>Price</h3>
                        <p>
                            Per person:{" "}
                            {dishData.pricePerServing &&
                                dishData.pricePerServing.toFixed(2)}
                        </p>
                        <p>
                            For {guests} guest{guests === 1 ? "" : "s"}:{" "}
                            {dishData.pricePerServing &&
                                (dishData.pricePerServing * guests).toFixed(2)}
                        </p>
            </section>
            
        </div>
    );
}
