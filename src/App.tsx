import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <div className="wrapper w-full flex flex-col justify-center items-center min-h-screen">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
        </Routes>
      </div>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
