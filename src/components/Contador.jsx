import React, { useState, useEffect } from "react";
function Contador() {
  const [cuenta, setCuenta] = useState(0);
  useEffect(() => {
    console.log("El contador cambió:", cuenta);
  }, [cuenta]); // Solo se ejecuta cuando cambia `cuenta`
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Contador: {cuenta}</h2>
      <button onClick={() => setCuenta(cuenta + 1)}>Aumentar</button>
      <button onClick={() => setCuenta(cuenta - 1)}>Disminuir</button>
      <button onClick={() => setCuenta(0)}>Reiniciar</button>
    </div>
  );
}
export default Contador;
