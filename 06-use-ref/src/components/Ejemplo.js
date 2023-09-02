import React, { useEffect, useRef, useState } from 'react'

export const Ejemplo = () => {

    const [numeroSaludo, setNumeroSaludo]= useState(0);
    const saludosEnCola = useRef(numeroSaludo);

    useEffect(()=>{
        saludosEnCola.current = numeroSaludo;
        setTimeout(()=>{
            console.log("Mensajes en cola:"+numeroSaludo)
        }, 2000)
    },[numeroSaludo])

    const enviarSaludo = e=>{
        setNumeroSaludo(numeroSaludo +1);
    }


  return (
    <div>
        <h1>Ejemplo con UseRef</h1>

        <h2>Saludos enviados: {numeroSaludo}</h2>
        <button onClick={enviarSaludo}>Enviar Saludos</button>
    </div>
  )
}
