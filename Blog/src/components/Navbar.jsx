import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../store/AppContext";

export const Navbar = () => {
  const { favorites, user, logout } = useAppContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-marvel-black flex flex-col items-center sticky top-0 z-50">
      <div className="bg-marvel-red px-10 py-1">
        <Link to="/" className="text-white font-black text-3xl italic tracking-tighter">Hero Blog</Link>
      </div>
      
      <div className="w-full bg-[#202020] h-9 flex justify-center items-center gap-10 border-b border-zinc-800 relative">
        <Link to="/characters" className="text-white text-[10px] font-bold uppercase tracking-widest hover:text-marvel-red transition-colors">
          Characters
        </Link>
        <Link to="/favorites" className="text-white text-[10px] font-bold uppercase tracking-widest hover:text-marvel-red transition-colors">
          Favorites ({favorites.length})
        </Link>
      
       
        <div className="absolute right-4 md:right-10 flex items-center gap-3">
          {user ? (
            <>
              <Link to="/account" className="text-white text-[10px] font-bold uppercase tracking-widest hover:text-marvel-red transition-colors">
                Account
              </Link>
              <span className="text-zinc-600 text-[10px]">|</span>
              <button 
                onClick={handleLogout} 
                className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white text-[10px] font-bold uppercase tracking-widest hover:text-marvel-red transition-colors">
                Login
              </Link>
              <span className="text-zinc-600 text-[10px]">|</span>
              <Link to="/register" className="text-white text-[10px] font-bold uppercase tracking-widest hover:text-marvel-red transition-colors">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};