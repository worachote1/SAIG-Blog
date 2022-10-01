import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import Form from "./components/Form"
import SingleComponent from "./components/SingleComponent"
import UpdateForm from "./components/UpdateForm"

const MyRoute = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<App />} />
                <Route path="/create" exact element={<Form />} />
                <Route path="/blog/:slug" exact element={<SingleComponent />} />
                <Route path="/blog/update/:slug" exact element={<UpdateForm />} />
            </Routes>
        </BrowserRouter>
    )

}

export default MyRoute;