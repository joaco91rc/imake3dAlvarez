import "./itemDetail.css"
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

import { useState, useContext, lazy, Suspense } from "react";
import {Link} from 'react-router-dom'
import { CartContext } from "../context/CartContext";
import Loader from "../Loader/Loader";

const ItemCount = lazy(() => import ('../ItemCount/ItemCount'))


const ItemDetail = ({item}) => {
    const {nombre,img,precio,descripcion} = item
    const [cantidad,setCantidad] = useState(0) 
    const {addToCart} = useContext(CartContext)
    
     const onAdd = (cantidad) => {
    setCantidad(cantidad)
    addToCart(item,cantidad)
  }
  
    return (
      <>
      <Suspense fallback= {<Loader/>}>
      <div className="itemDetail">
        
              <div className="img-detail-cont">
                  <img src={img} alt={nombre} className="img-detail" />
              </div>
        <div className="text-container">
                <div className="titulo-container">
                    <h1>{nombre}</h1>
                    <div className="precio-container">
                  <h3 style={{color:"goldenrod"}}>${precio}</h3>
                  
                  </div>
                  <div className="descripcion-container">
                    {descripcion && <span>{descripcion}</span>}
                    
                    </div>




                  </div>
                  
                    </div>

              <div className="envio-container">

                <div className="envio-camion">
              <div className="envio_camion">
                  <FontAwesomeIcon className="icono-camion" icon={solid('truck') } /> 
                  
                </div>
                <div className="envio-camion2">
                <h6>Envio gratis a todo el país</h6>
                </div>
                </div>
                
              <div className="envio-descripcion">
              
                
                <div>
              
                </div>
                <p className="envio-descripcion__parrafo">Conocé los tiempos y las formas de envío </p>

              </div>

              <div className="envio-devolucion">
                <h6 className="envio-devolucion__titulo">Devolucion Gratis</h6>
                <p className="envio-devolucion__parrafo">Tenes 30 días desde que lo recibis </p>

              </div>

              <div className="contador">

              {cantidad === 0  ?( <ItemCount inicial={1} stock={10} onAdd={onAdd}/>)
              : <div>
              <Link to='/cart'><button className="btn btn-primary">Ir al Carrito</button> </Link>
              <Link to='/'><button className="btn btn-primary">Seguir Comprando</button> </Link>
              </div>}
              </div>
              </div>
              
              </div>
        
            </Suspense>
        
      
    </>
  );
};

export default ItemDetail;