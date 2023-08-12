import React, {useEffect, useState} from 'react'
import { AvisoComponent } from './AvisoComponent';

export const PruebasComponent = () => {

    const [usuario, setUsuario]= useState("Alberto Aguilera")
    const [fecha, setFecha]= useState("31-01-1987")
    const [contador, setContador]= useState(0);

    const modUsuario = e =>{
        setUsuario(e.target.value)
    }

    const cambiarFecha= e =>{
      setFecha(new Date().toLocaleDateString());
    }

    //los corches hacen que el useEffect solo se ejecute 1 vez
    useEffect(()=>{
      console.log("has cargado el componente PruebasComponent");
    }, []);

    useEffect(()=>{
      setContador(contador+1);
      console.log("has modificado el usuario: "+contador);

    }, [fecha, usuario]);

  return (
    <div>
        <h1>El efecto - Hook useEffect</h1>
        <strong className={contador >= 10 ? 'label label-green' : 'label'}>{usuario}</strong>
        <strong>{fecha}</strong>

        <p>
        <input 
        type='text' 
        onChange={modUsuario} 
        placeholder='Cambia el nombre'
        />

        <button onClick={cambiarFecha}>Cambiar Fecha</button>
        </p>

        {usuario == "Alberto" && <AvisoComponent/>}

    </div>
  )
}
