import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home/Home"

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inicio" element={<Home />} />
        </Routes>
    )
}

export default Router