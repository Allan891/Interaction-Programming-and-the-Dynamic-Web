export function SuspenseView({promise, error}) {
    if (!promise) {
        return <span>no data</span>;
    }
    if (error) {
        return <span>{error.toString()}</span>;
    }
    return <img src="https://brfenergi.se/iprog/loading.gif" alt="loading" />;
}
