import './App.css';
import {  Route, Routes } from 'react-router-dom';
import LandingPage from '../src/components/LandingPage';
import Home from './components/Home';
import Details from './components/Details';
import Create from './components/Create';

function App() {
  return (
    < >
    <Routes>
      <Route index element= {<LandingPage/>}></Route>
      <Route path={'/home'} element={<Home/>}></Route>
      <Route path={'/pokemons/:id'} element={<Details/>}></Route>
      <Route path={'/pokemons'} element={<Create/>}></Route>

    </Routes>
    </>
  );
}

export default App;
