import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProductOverview from "pages/ProductOverview";
import Home from "pages/Home";
import Login from "pages/Login";
import BasketOverview from "./pages/BasketOverview";

import Footer from "components/Footer";
import Header from "components/Header";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <div className="wrapper w-full flex flex-col items-center min-h-screen py-5">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:id" element={<ProductOverview />} />
                    <Route path="/basket" element={<BasketOverview />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
