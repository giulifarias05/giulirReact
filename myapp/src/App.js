import React from 'react';
import './App.css'; // Si tienes estilos específicos de la App
import './index.css'; 
import Navbar from './components/navbar'; // Importa el componente Navbar

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Contenido de tu página */}
    </div>
  );
}

export default App;
