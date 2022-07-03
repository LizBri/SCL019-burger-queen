import React, { useState } from 'react';
import uniqid from 'uniqid';

export default function Cart() {

    const [item, setItem] = useState('');
    const [listaCarro, setListaCarro] = useState([]);
    const [edicionCarro, setEdicionCarro] = useState(false);
    const [id, setId] = useState('');
    const [cantidad, setCantidad] = useState(1);
    const [error, setError] = useState (null);

    const addItem= (e)=>{
        e.preventDefault();
        if(!item.trim()){
            setError('El carrito está vacío');
            return;
        }

        const nuevoItem={
            id:uniqid(),
            tituloItem:item
        }

        setListaCarro([...listaCarro,nuevoItem]);
        setItem('');
        setError(null);
    };

    const deleteItem = (id) =>{
        const nuevaArray = listaCarro.filter(i => i.id !== id);
        setListaCarro(nuevaArray);
    };

    const editar = (i) => {
        setEdicionCarro(true);
        setItem(i.tituloItem);
        setId(item.id);
    };

    const editarItem = (e) =>{
        e.preventDefault();
        const nuevoArray = listaCarro.map(i => i.id === id ? { id:id, tituloItem:item}: i);
        setListaCarro(nuevoArray);
        setEdicionCarro(false);
        setItem('');
    };

    const Aumentar = () => {
        setCantidad(cantidad + 1);
    };
    const Reducir = () => {
        setCantidad(cantidad - 1);
    }



  return (
    <div>
        <h2>Cuenta</h2>
        <div className='col mt-2'>
            <ul>
                {
                    listaCarro.map(i=>
                        <li>
                            {item.tituloItem}
                            <div>
                                <button
                                    className="btn btn-danger btn-sm float-end"
                                    onClick={ () => {deleteItem(i.id)}}>
                                        x
                                </button>

                                <button
                                   className="btn btn-warning btn-sm float-end"
                                   onClick={ () => {editar(i)}}>
                                    editar
                                </button>
                            </div>
                            <div>
                                
                            <button onClick={()=>{Aumentar(i)}}
                                    className='btn btn-warning'> 
                                    + 
                                    </button>
                            <button onClick={()=>{Reducir(i)}}
                                    className='btn btn-warning'>
                                    - 
                                    </button>
                            </div>
                        </li>
                        )
                }
            </ul>
        </div>
        <div>
        <h2>Sumar o restar items</h2>

<form onSubmit={edicionCarro ? editarItem : addItem} className="form-group">
    
    <input onChange={(e)=>{setItem(e.target.value)}}
           className="form-control mb-3 text-warning" 
           value={item}/>

    <input className="btn btn-warning btn-sm"
           type="submit" 
           value={edicionCarro ? 'Cambiar item' : 'Agregar'}
           />
</form>
   {
    error!= null ? (
    <div className="alert alert-danger mt-1">
        {error}
    </div>
        ):
        (
          <div></div>
        )
    }
        </div>

    </div>
  )
}
