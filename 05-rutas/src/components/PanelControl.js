import React from 'react'


export const PanelControl = () => {
  return (
    <div>
        <h1>Panel de Control</h1>
        <p>Elige una de estas opciones</p>
        <nav>
          <ul>
            <li>
              <a href='/panel/inicio'>Inicio</a>
            </li>
            <li>
              <a href='/panel/crear-articulos'>Crear artículos</a>
            </li>
            <li>
              <a href='/panel/gestion-de-usuarios'>Gestion Usuario</a>
            </li>
            <li>
              <a href='/panel/acerca-de'>Acerca de</a>
            </li>
          </ul>
        </nav>
    </div>
  )
}