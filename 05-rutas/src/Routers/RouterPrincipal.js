import React from 'react'
import {Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import { Inicio } from '../components/Inicio';
import { Articulos } from '../components/Articulos';
import { Contacto } from '../components/Contacto';
import { Error } from '../components/Error';


export const RouterPrincipal = () => {
  return (
    <BrowserRouter>

      <h1>cabecera</h1>
      <hr/>
      <h2>menu</h2>
      <hr/>

      <section className='contenido-principal'>
        <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/inicio' element={<Inicio/>}/>
            <Route path='/articulos' element={<Articulos/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
            <Route path='*' element={<Error/>}/>
        </Routes>
        </section>
        <hr/>
       <footer>
        Este es el pie de pagina
        </footer> 
    </BrowserRouter>
    
  )
}
