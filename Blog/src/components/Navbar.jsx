import { Link } from "react-router-dom";
import { useAppContext } from "../store/AppContext";

export const Navbar = () => {
  const { favorites } = useAppContext();

  return (
    <nav className="bg-marvel-black flex flex-col items-center sticky top-0 z-50">
      <div className="bg-marvel-red px-10 py-1">
       
        <Link to="/" className="text-white font-black text-3xl italic tracking-tighter">MARVEL</Link>
      
      </div>
      
      <div className="w-full bg-[#202020] h-9 flex justify-center items-center gap-10 border-b border-zinc-800">
      
        <Link to="/characters" className="text-white text-[10px] font-bold uppercase tracking-widest hover:text-marvel-red">Characters</Link>
        <Link to="/favorites" className="text-white text-[10px] font-bold uppercase tracking-widest hover:text-marvel-red">Favorites ({favorites.length})</Link>
      
      </div>
    </nav>
  );
};