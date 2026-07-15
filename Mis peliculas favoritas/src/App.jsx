import { useState } from 'react'
import './App.css'

function Pelicula({titulo}) {
  const [favorita, setFavorita] = useState(false);

  return (
    <div style={{
        backgroundColor: favorita ? "#ffe082" : "#f4f4f4",
        padding: "15px",
        margin: "10px 0",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "20px",
      }}

      onClick={() => setFavorita(!favorita)}
    >
      {titulo} {favorita ? "⭐" : ""}
    </div>
  );
}

function App() {
  
  const peliculas = [
    "Bohemian Rhapsody",
    "La teoria del todo",
    "Avengers: Endgame",
    "Juego de honor"]
  


  return (
    <div>
      <h1>Mis Películas Favoritas</h1>

      <div style={{ marginTop: "20px" }}>
        {peliculas.map((pelicula, indice) => (
          <Pelicula key={indice} titulo={pelicula} />
        ))}
      </div>
    </div>
  );
}

export default App;