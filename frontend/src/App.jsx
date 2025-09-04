import './css/App.css'
import Favorites from "./pages/Favorites";
import Home from "./pages/Home"
import Popular from "./pages/Popular"
import {Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar"
import { PlantProvider } from './contexts/PlantContext';

function App() {
  return (
    <PlantProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/popular" element={<Popular />}/>
          <Route path="/favorites" element={<Favorites />}/>
        </Routes>
      </main>
    </PlantProvider>
    
  );
}

export default App
