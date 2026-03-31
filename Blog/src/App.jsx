import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./store/AppContext";
import { Navbar } from "./components/Navbar";
import { Home } from "./views/Home";
import { Characters } from "./views/Characters";
import { Details } from "./views/Details";
import { Favorites } from "./views/Favorites";

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}