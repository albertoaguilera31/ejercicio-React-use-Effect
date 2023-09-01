import React, { useRef } from 'react'

export const Formulario = () => {

    const nombre = useRef("Alberto");

    const mostrar = e=>{
        e.preventDefault();
        console.log(nombre);
    }

  return (
    <div>
        <h1>Formulario</h1>
        <form onSubmit={mostrar}>
            <input type='text' placeholder='Nombre'/><br/>
            <input type='text' placeholder='Apellido'/><br/>
            <input type='email' placeholder='Correo Electrónico'/><br/>

            <input type='submit' value='Enviar'/>
        </form>
    </div>
  )
}
