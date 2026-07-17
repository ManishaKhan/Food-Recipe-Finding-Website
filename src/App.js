import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RecipeDetail from './pages/RecipeDetail';
import Recipes from './components/Recipes';




function App() {
  return (
    <div className='bg-black'>
       <Navbar/>
      {/* <Routes>              
          <Route path='/' element={<Home />} />
          <Route path='/recipes' element={<Recipes/>} />
          <Route path='recipes/:id' element={<RecipeDetail />} />        
      </Routes> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
