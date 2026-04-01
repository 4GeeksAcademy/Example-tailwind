import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-marvel-black text-white w-full border-t-8 border-marvel-red mt-auto">
      <div className="container mx-auto px-6 py-10 flex flex-col items-center gap-8">
        
        <Link to="/" className="bg-marvel-red px-6 py-2 transform -skew-x-12">
          <span className="text-white font-black text-2xl italic uppercase tracking-tighter block skew-x-12">
            Hero Blog
          </span>
        </Link>

        <nav className="flex flex-wrap justify-center gap-6 text-[12px] font-black uppercase tracking-[0.2em]">
          <Link to="/characters" className="hover:text-marvel-red transition-colors">Characters</Link>
          <Link to="/favorites" className="hover:text-marvel-red transition-colors">Favorites</Link>
          <a 
            href="https://github.com/RAntonio13" 
            target="_blank" 
            className="hover:text-marvel-red transition-colors md-5px hover:underline"
          >
            GitHub Profile
          </a>
        </nav>

        <div className="flex flex-col items-center gap-4 border-t border-zinc-800 w-full pt-8">
          <p className="text-zinc-500 text-[11px] font-black uppercase tracking-[0.3em]">
            Desarrollado por <span className="text-white">Roberth Andrade</span>
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-[9px] font-bold uppercase text-zinc-600">
            <span>Terms of Use</span>
            <span>Privacy Policy</span>
            <span>Cookie Policy</span>
            <span>© {new Date().getFullYear()} HERO DATABASE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};