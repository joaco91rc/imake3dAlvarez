
import React from 'react';
import './App.css';
import {BrowserRouter as Router,  Route, Routes} from 'react-router-dom'
import Navbar from './components/navegacion/Navbar'
import Incio from './components/paginas/Inicio'
import Categorias from './components/paginas/categorias'
import Shop from './components/paginas/Shop'
import ItemListContainer from './components/container/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/container/ItemDetailContainer';
import Provider from './components/context/CartContext';
import Cart from './components/paginas/cart';




const styles ={
  carrito: {
    display:'flex',
    justifyContent:'space-between',
    color:'goldenRod'
  },
}




function App() {
const onAdd = (cantidad)=> {
  const mensaje= alert(`Compraste ${cantidad} unidades`)}

  return (
   <>
    <Provider>
    <Router>
      
    <Navbar style={styles.carrito}/>
     <div className='tituloWeb'>
     <h1> Shop de IMake3D Impresiones 3D</h1>
     </div>
    <Routes>
    <Route path='/' element={<ItemListContainer/>}/>
    <Route path='/categorias/:categoria' element={<ItemListContainer/>}/>
    <Route path='/item/:id' element={<ItemDetailContainer/>}/>
    <Route path="/cart" element={<Cart />} />
    </Routes>
    
    </Router>
     
    </Provider>
    
    
    
    
   
        
    </>
    
    
  );

  };
export default App;
