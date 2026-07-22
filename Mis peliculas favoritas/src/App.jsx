import { useState } from 'react'
import './App.css'

function Pelicula({titulo, director}) {
  const [favorita, setFavorita] = useState(false);
  const [fueVista, setFueVista] = useState(false);

  return (
    <div style={{
        backgroundColor: favorita ? "#ffe082" : "#f4f4f4",
        padding: "15px",
        margin: "10px 0",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "20px",
      }}

      style={{
        backgroundColor: fueVista ? "#341d78" : "#f4f4f4",
        padding: "15px",
        margin: "10px 0",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "20px",
      }}

      onClick={() => setFavorita(!favorita)}
    >
      {titulo + " " + director} {favorita ? "⭐" : ""}

      <button onClick={()=>setFueVista(!fueVista)}> Marcar como vista</button>

    </div>
  );
}

function App() {
  const [peliculas, setPeliculas] = useState([
    "Bohemian Rhapsody",
    "La teoria del todo",
    "Avengers: Endgame",
    "Juego de honor",
    
  ]);

  const director= "Oscar"

  const [nuevaPelicula, setNuevaPelicula] = useState("");

  function agregarPelicula() {
    if (nuevaPelicula.trim() === "") {
      return;
    }else{

    setPeliculas([...peliculas, nuevaPelicula]);
    setNuevaPelicula("");
    }
  }

  return (
    <div>
      <h1>Mis Películas Favoritas</h1>

      <input
        type="text"
        placeholder="Nueva película"
        value={nuevaPelicula}
        onChange={(e) => setNuevaPelicula(e.target.value)}
        style={{
          padding: "10px",
          width: "70%",
          fontSize: "16px",
        }}
      />

      <button onClick={agregarPelicula}
        style={{
          padding: "10px 15px",
          marginLeft: "10px",
          cursor: "pointer",
        }}
      >
        Agregar
      </button>

      <div style={{ marginTop: "20px" }}>
        {peliculas.map((pelicula, indice) => (
          <Pelicula key={indice} titulo={pelicula} director= {director}/>
        ))}
      </div>
    </div>
  );
}

export default App;