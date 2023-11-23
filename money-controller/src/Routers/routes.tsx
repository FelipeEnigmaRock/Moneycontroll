import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../Containers/Home/index'

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers;