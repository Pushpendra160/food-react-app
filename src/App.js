import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Thankyou from './pages/Thankyou/Thankyou';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
   
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/thankyou" element={<Thankyou />} />
        </Routes>
       
      </BrowserRouter>

    </div>
  );
}

export default App;