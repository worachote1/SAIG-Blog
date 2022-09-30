import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import Form from "./components/Form"

import SingleComponent from "./components/SingleComponent"

const MyRoute = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<App />} />
                <Route path="/create" exact element={<Form />} />
                <Route path="/blog/:slug" exact element={<SingleComponent />} />
            </Routes>
        </BrowserRouter>
    )

}

export default MyRoute;