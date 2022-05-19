import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import Footer from './footer';
import Category from './category';
import Search from './Search'
import Home from './home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MoviePage from './MoviePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        
        <Route exact path='/' element={<><Home/>
    </>}/>
    
    <Route exact path='/category' element={<><Category/></>}/>
    <Route exact path='/search' element={<><Search/></>}/>
    <Route exact path="/moviepage" element={<MoviePage/>}/>
    </Routes>
    <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
