import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const [data, setData] = useState({ marvel: [], dc: [], others: [] });


  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });


  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Fetch a la API de héroes
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
  }, []);


  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);


  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const toggleFavorite = (item) => {
    setFavorites((prev) => {
      const isFav = prev.some((f) => f.id === item.id);
      return isFav ? prev.filter((f) => f.id !== item.id) : [...prev, item];
    });
  };


  const login = (userData) => {
    setUser(userData);
  };


  const logout = () => {
    setUser(null);
  };

  return (

    <AppContext.Provider value={{ data, favorites, toggleFavorite, user, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);