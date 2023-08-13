import React, { useEffect, useState } from "react";

export const AjaxComponent = () => {

  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando]= useState(true);

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

  const getUsuariosAjaxAW =()=>{

    setTimeout(async()=>{
      const peticion = await fetch("https://reqres.in/api/users?page=1");
      const {data} = await peticion.json();

      setUsuarios(data);
      setCargando(false)
      console.log(data);
    },2000)

    
  }

  useEffect(() => {
    //getUsuariosAjaxPms();
    getUsuariosAjaxAW();
  }, []);


  if(cargando == true){
    //cuando esta todo cargado
    return (
    <div className="cargando">
      Cargando datos...
    </div>
);
  }else{
    //cuando todo va bien
  return (
    <div>
      <h2>Listado de usuarios vía Ajax</h2>
      <ol className="usuarios">
        {usuarios.map((usuario) => {
          console.log(usuario);
          return (
            <li key={usuario.id}>
              <img src={usuario.avatar} width="80"/>
              {usuario.first_name} {usuario.last_name}
            </li>
          );
        })}
      </ol>
    </div>
  );

  }
  
};
