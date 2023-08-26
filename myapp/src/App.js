import React from 'react';
import './App.css'; // Si tienes estilos específicos de la App
import './index.css'; 
import Navbar from './components/navbar'; // Importa el componente Navbar
import Footer from './components/footer'; // Importa el componente Navbar

function App() {
  return (
    <div className="app-container">
    <Navbar />
    <main className="main-content">
      {/* Contenido principal */}
    </main>
    <Footer />
  </div>
  );
}

export default App;
