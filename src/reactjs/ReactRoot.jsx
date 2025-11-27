import { observer } from "mobx-react-lite";
import { Sidebar } from "./sidebarPresenter.jsx";
import { Summary } from "./summaryPresenter.jsx";
import { Search } from "./searchPresenter.jsx";
import { Details } from "./detailsPresenter.jsx";
import { SuspenseView } from "../views/suspenseView.jsx";
import { createHashRouter, RouterProvider } from "react-router-dom";

export const ReactRoot = observer(
    function ReactRoot(props){
        if (!props.model.ready) {
        return <SuspenseView promise={Promise.resolve("loading...")} />;
    }
    const router = createHashRouter([
        {
            path: "/",
            element: <Search model={props.model} />,
        },
        {
            path: "/search",
            element: <Search model={props.model}/>,
        },
        {
            path: "/summary",
            element: <Summary model={props.model}/>,
        },
        {
            path: "/details",
            element: <Details model={props.model}/>,
        },
    ]);


    return (
        <div className="app-root">
            <div className="sidebar">
                <Sidebar model={props.model} />
            </div>
            <div className="main">
                <RouterProvider router={router}/>
            </div>
        </div>
    );
})