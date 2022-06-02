import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header';
import About from './Components/About';
import Contact from './Components/Contact';
import FavoriteStocks from './Components/FavoriteStocks';
import Home from './Components/Home';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/favorite" element={<FavoriteStocks/>}/>
      </Routes>

    </div>
  );
}

export default App;
