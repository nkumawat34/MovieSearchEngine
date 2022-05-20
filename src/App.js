import logo from './logo.svg';
import './App.css';
import Navbar from './Header/navbar';
import Footer from './Footer/footer';
import Category from './Category/category';
import Search from './Search/Search'
import Home from './Home/home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MoviePage from './MoviePage/MoviePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        
        <Route exact path='/MovieSearchEngine' element={<><Home/>
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
