import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;