import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

export const EjemploComponent = () => {

    const [mostrar, setmostrar]= useState(false);

    const caja= useRef();
    const boton= useRef();


    useEffect(()=>{
        console.log("useEffect: componente cargado!!");

        if(caja.current==null) return

        const {bottom}= boton.current.getBoundingClientRect();

        caja.current.style.top= `${bottom+45}px`;
        caja.current.style.left= `${bottom+45}px`;

    }, [mostrar]);

  return (
    <div>
        <h1>Ejemplo useEffect y useLayoutEffect</h1>

        <button ref={boton} onClick={()=> setmostrar(prev=> {
                console.log(!prev)
                return !prev;
            })}>Mostrar mensaje</button>
        
        {mostrar &&(
            <div id='caja' ref={caja}>
                Hola, soy un mensaje {mostrar}
            </div>

        )}
    </div>
  )
}
