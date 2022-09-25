import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import Form from "./components/Form"

const MyRoute = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<App />} />
                <Route path="/create" exact element={<Form />} />
            </Routes>
        </BrowserRouter>
    )

}

export default MyRoute;