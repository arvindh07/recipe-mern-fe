import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipe from './components/AddRecipe/AddRecipe';
import SavedRecipes from './components/SavedRecipes/SavedRecipes';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="createrecipe" element={<AddRecipe />} />
          <Route path="savedrecipes" element={<SavedRecipes />} />
          <Route path="auth" element={<Auth />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
