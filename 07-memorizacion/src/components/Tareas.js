import React from 'react'

export const Tareas = () => {
  return (
    <div>
        <h1>Mis tareas</h1>
        <form>
            <input type='text' name='descripcion' placeholder='Describe la tarea'/>
            <input type='submit' value='guardar'/>
        </form>
    </div>
  )
}
