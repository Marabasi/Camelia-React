// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route patch='/' element={<ItemListContainer/>}></Route>
            <Route patch='/category/:categoryId' element={<ItemListContainer/>}></Route>
            <Route patch='/item/:itemId' element={<ItemDetailContainer/>}></Route>
            <Route patch='*' element={<h1>404 NOT FOUND</h1>}></Route>
          </Routes>
        {/* <ItemListContainer>greeting={'Bienvenidos'}</ItemListContainer>
        // <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad agregada", quantity)}></ItemCount> */}
        </BrowserRouter>
        
      </div>
    </>
  );
};

export default App;