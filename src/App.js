import RootLayOut from "./components/layout/RootLayOut";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
    createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
import About from "./components/pages/About";
import Contacts from "./components/pages/Contacts";

let router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayOut />}>
        <Route index element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contacts/>}/>
    </Route>)
);
function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
