import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 text-white px-4">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Bienvenue sur GN IMMO 🏠
          </h1>

          <p className="text-lg md:text-xl opacity-90">
            Votre plateforme immobilière de confiance en Guinée.
            Trouvez, louez ou achetez votre bien en toute sécurité.
          </p>
        </div>
      </div>
    </Router>
  );
}

export default App;
