import React, { useEffect, useReducer } from 'react'
import { JuegoReducers } from '../reducers/JuegoReducers';

const init =()=>{
    return JSON.parse(localStorage.getItem("juegos")) || [];
}

export const Misjuegos = () => {

    const [juegos, dispatch]= useReducer(JuegoReducers, [], init);

    useEffect(()=>{
        localStorage.setItem("juegos", JSON.stringify(juegos));
    }, [juegos]);

    const conseguirDatosForm= e=>{
        e.preventDefault();

        let juego ={
            id: new Date().getTime(),
            titulo: e.target.titulo.value,
            descripcion: e.target.descripcion.value
        }


        const accion={
            type: "crear",
            payload: juego
        }

        dispatch(accion);

        console.log(juegos);
    }

    const borramelo=id =>{
        const action={
            type: "borrar",
            payload: id
        };

        dispatch(action);
    }

    const editar=(e, id)=>{
        console.log(e.target.value, "editar", id);

        let juego ={
            id,
            titulo: e.target.value,
            descripcion: e.target.value
        }

        const accion={
            type: "editar",
            payload: juego
        }

        dispatch(accion);

    }

    


  return (
    <div>
        <h1>Estos son mis videojuegos</h1>

        <p>Número de videojuegos: {juegos.length}</p>
        <ul>
            {
                juegos.map(juego=>(
                    <li key={juego.id}>
                        {juego.titulo}

                        &nbsp; <button onClick={e=> borramelo(juego.id)}>X</button>
                        <input type='text' onBlur={e=> editar(e, juego.id)}/>
                    </li>
                ))
            }
        </ul>

        <h3>Agregar juego</h3>

        <form onSubmit={conseguirDatosForm}>
            <input type='text' name='titulo' placeholder='titulo'/>
            <textarea name='descripcion' placeholder='Descripcion'></textarea>
            <input type='submit' value='guardar'/>
        </form>
    </div>
  )
}
