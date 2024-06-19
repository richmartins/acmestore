import { BrowserRouter, Route, Routes, } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductOverview from "./pages/ProductOverview";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <div className="wrapper w-full flex flex-col justify-center items-center min-h-screen py-5">
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/product/:id" element={<ProductOverview />} />

          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
