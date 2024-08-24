import { useEffect, useState } from "react";
import "./App.css";

function Registro({recargarAhora}) {

  const [registroUsuario, setRegistroUsuario] = useState("");
  const [registroContraseña, setRegistroContraseña] = useState("");

  function cambiarRegistroUsuario(evento) {
    setRegistroUsuario(evento.target.value);
  }
  function cambiarRegistroContraseña(evento) {
    setRegistroContraseña(evento.target.value);
  }
  async function registrar() { 
    const peticion = await fetch(" http://localhost:3000/registro?usuario=" + registroUsuario + '&clave=' + registroContraseña,{ credentials: 'include'});
    if (peticion.ok){
      alert("Usuario Registrado")
      recargarAhora()
    }else{
      alert("Error al Registrar");
    }
  }

  
  useEffect(() => {
   
  }, [])


  return (
    <>
    <h1> Registrate </h1>
      <input placeholder="RegistroUsuario" type="text" name="usuario" id="usuario" value={registroUsuario} onChange={cambiarRegistroUsuario}
      />
      <br />      
      <input placeholder="RegistroContraseña" type="password" name="contraseña" id="contraseña" value={registroContraseña} onChange={cambiarRegistroContraseña}
      />
      <br />
      <br />
      <button onClick={registrar}>Guardar</button>
      <br />
      <br />
     
    </>
  );
}
export default Registro;