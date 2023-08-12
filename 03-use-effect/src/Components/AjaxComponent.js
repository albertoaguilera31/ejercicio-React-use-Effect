import React, { useEffect, useState } from "react";

export const AjaxComponent = () => {
  const [usuarios, setUsuarios] = useState([]);

  //Generico/básico
  /*const getUsuariosEstaticos = () => {
    setUsuarios([
      {
        id: 1,
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        last_name: "Lawson",
      },
      {
        id: 2,
        email: "lindsay.ferguson@reqres.in",
        first_name: "Lindsay",
        last_name: "Ferguson",
      },
      {
        id: 3,
        email: "tobias.funke@reqres.in",
        first_name: "Tobias",
        last_name: "Funke",
      },
    ]);
  };*/

  /*const getUsuariosAjaxPms =() => {
    fetch("https://reqres.in/api/users?page=2")
    .then(respuesta => respuesta.json())
    .then(
        resultado_final =>{
            setUsuarios(resultado_final.data);
            console.log(usuarios);
        }
    );
  }*/

  const getUsuariosAjaxAW = async()=>{
    const peticion = await fetch("https://reqres.in/api/users?page=1");
    const {data} = await peticion.json();

    setUsuarios(data);

    console.log(data);
  }

  useEffect(() => {
    //getUsuariosAjaxPms();
    getUsuariosAjaxAW();
  }, []);

  return (
    <div>
      <h2>Listado de usuarios vía Ajax</h2>
      <ol className="usuarios">
        {usuarios.map((usuario) => {
          console.log(usuario);
          return (
            <li key={usuario.id}>
              {usuario.first_name} {usuario.last_name}
            </li>
          );
        })}
      </ol>
    </div>
  );
};
