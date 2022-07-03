import React, { Fragment, useState } from 'react'
import Tables from './Tables';

export default function Menu() {

//Listado del Menu
    const[ menus, setMenus ]= useState (
        [ {id: "Café",
           price: 5,
           tag: "Desayuno"},

          {id: "Café con Leche",
          price: 7,
          tag:"Desayuno"},

          {id: "Sandwich de Jamón y Queso",
          price: 10,
          tag: "Desayuno"},

          {id: "Jugo de frutas Natural",
          price: 5,
          tag: "Desayuno"},

          {id: "Hamburguesa Simple",
          price: 10,
          tag: "NoDesayuno"},

          {id: "Hamburguesa Doble",
          price: 15,
          tag: "NoDesayuno"},

          {id: "Papas Fritas",
          price: 5,
          tag: "Acompañamiento"},

          {id: "Aros de Cebolla",
          price: 5,
          tag: "Acompañamiento"},

          {id: "Agua 500ml",
          price: 5,
          tag: "Beber"},

          {id: "Agua 750ml",
          price: 7,
          tag: "Beber"},

          {id: "Bebida/gaseosa 500ml",
          price: 7,
          tag: "Beber"},

          {id: "Bebida/gaseosa 750ml",
          price: 10,
          tag: "Beber"}
        ]
    );

//Carrito
    const [cart, setCart] = useState([])


  return (
    <Fragment>
        <input className='btn btn-warning btn-sm'
        type="button"
        value="Desayuno"
        />
         <input className='btn btn-warning btn-sm'
        type="button"
        value="Menu Tarde"
        />
    
    



    </Fragment>
  )
}
