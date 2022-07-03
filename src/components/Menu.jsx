import React, { Fragment, useState } from 'react'
import Tables from './Tables';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Cart from './Cart';


export default function Menu() {

  return (
    <Fragment>

      <Link to ='/' className='text-warning float-sm-start '>
       Back
      </Link>

        <input className='text-warning'
        type="button"
        value="Beber"
        />
         <input className='text-warning'
        type="button"
        value="Agregado"
        />
                <input className='text-warning'
        type="button"
        value="Hamburguesa"
        />

       <Cart/>
    
    



    </Fragment>
  )
}
