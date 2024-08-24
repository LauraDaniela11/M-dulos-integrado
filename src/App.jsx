import { useEffect, useState } from "react";
import "./App.css";
import Conversor from "./Conversor";
import Usurios from "./Usuarios";
import Registro from "./Registro";

function App() {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [logueado, setLogueado] = useState(false);
  const[recargar,setRecargar] =useState(false)
 

  function cambiarUsuario(evento) {
    setUsuario(evento.target.value);
  }
  function cambiarContraseña(evento) {
    setContraseña(evento.target.value);
  }
  function recargarAhora() {
    setRecargar (!recargar)
  }
  async function validacion() {
    const peticion = await fetch(" http://localhost:3000/Login?usuario=" + usuario + '&clave=' + contraseña,{ credentials: 'include'});
    if (peticion.ok){
      setLogueado(true);
      //obtenerUsuarios();
    }else{
      alert("Usuario o contraseña incorrectos");
    }
  }
 
  async function validar(){
    const peticion = await fetch("http://localhost:3000/validar", {credentials: 'include'});
    if(peticion.ok){
      setLogueado(true) 
    }
  }
  
  useEffect(() => {
    validar();    
  }, [])

  if (logueado) {
      return( 
      <>
      <Registro recargarAhora = {recargarAhora}/>   
      <Conversor />
      <Usurios recargar ={recargar} />
      
      </>)
  }
  return (
    <>
    <h1> inicia de sesion </h1>
      <input placeholder="Usuario" type="text" name="usuario" id="usuario" value={usuario} onChange={cambiarUsuario}
      />
      <br />
      <br />
      <input placeholder="Contraseña" type="password" name="contraseña" id="contraseña" value={contraseña} onChange={cambiarContraseña}
      />
      <br />
      <br />
      <button onClick={validacion}>Confirmar</button>
      <br />
     
    </>
  );
}
export default App;