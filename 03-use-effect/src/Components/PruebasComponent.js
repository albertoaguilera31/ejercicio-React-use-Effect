import React, {useState} from 'react'

export const PruebasComponent = () => {

    const [usuario, setUsuario]= useState("Alberto Aguilera")

    const modUsuario = e =>{
        setUsuario(e.target.value)
    }

  return (
    <div>
        <h1>El efecto - Hook useEffect</h1>
        <strong className='label'>{usuario}</strong>
        <form>
        <input 
        type='text' 
        onChange={modUsuario} 
        placeholder='Cambia el nombre'
        />
        </form>
    </div>
  )
}
