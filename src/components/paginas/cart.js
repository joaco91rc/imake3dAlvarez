import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const Cart = () => {
    const { cart, borrarUnItem, vaciarCarrito,suma } = useContext(CartContext);
    const order = {
        comprador: {
            nombre:'Joaquin Alvarez',
            email: 'joaquinalvarez@gmail.com',
            telefono: '2215568971',
            direccion: '25 entre 63 y 64 Nro 1256',
            items:cart.map(producto => ({id:producto.id,nombre:producto.nombre,precio:producto.precio,cantidad:producto.cantidad})),
            total: suma

        }
        
    }
    const emitirCompra = () => {
        const db = getFirestore()
        const orderCollection = collection(db,'orders')   
        addDoc(orderCollection,order)
        .then(({id})=> console.log(id))
        alert('Compra Aprobada. En los proximos 3 dias hábiles recibira un mail con el numero de seguimiento de su envio. Gracias por su compra. IMake3D')
       }
   
    if (cart.length === 0) {
        return (
            <h2 className='titulo'>
                Aún no hay productos, volver al <Link className='link' to="/">Home</Link>
            </h2>
        );
    }
    return (
        <div className='resumenCompra'>
            {cart.map((prod) => (
                <div className='detalleCompra'
                    key={prod.id}
                    style={{
                        border: '2px solid goldenrod',
                        margin: '10px',
                        display: 'flex',
                        
                        backgroundImage: 'radial-gradient( circle farthest-corner at -4% -12.9%,  rgba(74,98,110,1) 0.3%, rgba(30,33,48,1) 90.2% )'
                    }}
                >
                    <img src={prod.img} width="200px" alt={prod.nombre} />
                    <div className='detalleCarrito'>
                        <h2 className='detalleCarritoNombre' >{prod.nombre}</h2>
                        <h2 className='detalleCarritoPrecio'>$ {prod.precio}.</h2>
                        <h2 className='detalleCantidadCarrito'>Cantidad:{prod.cantidad}</h2>
                    </div>
                        <div className='botonEliminar'>
                      <button className='btn iconoEliminar btn-primary' onClick={() => borrarUnItem(prod.id)}><FontAwesomeIcon className='iconoBorrar' icon={solid('trash') } /></button>
                      </div>
                </div>
            ))}
            <button className='btn btn-primary' onClick={vaciarCarrito}>Vaciar Carrito</button>
            <Link to='/'><button className="btn btn-primary">Seguir Comprando</button> </Link>
            <h3 className='detalleTotal'>Total:$ {suma} </h3>
            <Link to='/'><button className='btn btn-primary' onClick={emitirCompra}>Comprar</button></Link>
        </div>
    );
};

export default Cart;
