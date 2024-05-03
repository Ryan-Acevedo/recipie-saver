import './App.css'
import { Routes, Route } from 'react-router-dom';
import RecipeOptions from './components/RecipeOptions';
import Create from './views/Create';
import RecipeDetails from './views/RecipeDetails';
import Update from './views/Update';
import Login from './components/Login';
import Unauthorized from './views/Unauthorized';

function App() {

  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path='/recipes' element={<RecipeOptions />} />
        <Route path='/recipes/create' element={<Create />} />
        <Route path='/recipes/:id/details' element={<RecipeDetails />} />
        <Route path='/recipes/:id/update' element={<Update />} />
        <Route path='/unauthorized' element={<Unauthorized />} />
      </Routes>
    </>
  )
}

export default App
