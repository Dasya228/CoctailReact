import React from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Header from "./components/Header";
import SearchPage from "./Pages/SearchPage";
import CoctailCard from "./components/CoctailCard";
import CoctailPage from "./Pages/CoctailPage";
import IngredientPage from "./Pages/IngredientPage";
import FooterPage from "./Pages/FooterPage";

const App =()=>{
  return(
     <>
         <Header/>
     <Routes>
         <Route path='/' element={<HomePage/>}/>
         <Route path='/search' element={<SearchPage/>}/>
         <Route path='/drinks/:idDrink' element={<CoctailPage/>}/>
         <Route path='/ingredient/:name' element={<IngredientPage/>}/>
     </Routes>
         <FooterPage/>
     </>
  )
}
export default App
