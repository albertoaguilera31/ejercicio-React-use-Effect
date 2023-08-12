import React, { useEffect } from 'react'

export const AvisoComponent = () => {

  useEffect(()=>{
    alert("El componente esta montado")

    //Cuando el componente se desmonta
    return()=>{
      alert("componente desmontado");
    }
  }, []);


  return (
    <div>
        <h1>Saludos Alberto</h1>
        <button onClick={e=>{
          alert("bienvenido");
        }}>Mostrar alerta</button>
    </div>
  )
}
