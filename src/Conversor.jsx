import { useState } from "react";
import "./App.css";

function Conversor() {
  const [textoAVoz, setTextoAVoz] = useState("");
  const [VozATexto, setVozATexto] = useState("");

  function cambiarTexto(evento) {
    setTextoAVoz(evento.target.value);
  }
  function convertirTextoAVoz() {
    const texto = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance(textoAVoz);
    texto.speak(utterThis);
  }
  function resultado(event) {
    setVozATexto(event.results[0][0].transcript);
  }
  function grabarVozATexto() {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "es-ES";
    recognition.start();
    recognition.onresult = resultado;
  }

  return (
    <>
    <h1>Conversor TTS Y STT</h1>
      <h3>Conversor Texto a voz</h3>
      <br />
      <input type="text" id="textoAVoz" value={textoAVoz} onChange={cambiarTexto} />
      <br />
      <button onClick={convertirTextoAVoz}>Convertir</button>
      <br />
      <h3>Grabar voz a texto</h3>
      <button onClick={grabarVozATexto}>Grabar</button>
      {VozATexto}
    </>
  );
}
export default Conversor