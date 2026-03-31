import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [data, setData] = useState({ marvel: [], dc: [], others: [] });
  const [favorites, setFavorites] = useState([]);

  const fetchHeroes = async () => {
    try {
      const response = await fetch("https://akabab.github.io/superhero-api/api/all.json");
      const list = await response.json();
      
      const groups = list.reduce((acc, item) => {
        const publisher = item.biography.publisher?.toLowerCase() || "";
        if (publisher.includes("marvel")) acc.marvel.push(item);
        else if (publisher.includes("dc")) acc.dc.push(item);
        else acc.others.push(item);
        return acc;
      }, { marvel: [], dc: [], others: [] });

      setData(groups);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchHeroes();
    const saved = localStorage.getItem("favorites");
    if (saved) setFavorites(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (item) => {
    const isFav = favorites.some(f => f.id === item.id);
    setFavorites(isFav ? favorites.filter(f => f.id !== item.id) : [...favorites, item]);
  };

  return (
    <AppContext.Provider value={{ data, favorites, toggleFavorite }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);