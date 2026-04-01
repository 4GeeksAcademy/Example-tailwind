import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="h-[calc(100vh-92px)] bg-marvel-black flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      <Link to="/characters" className="group z-10 text-center">
      
        <h1 className="text-white text-8xl md:text-9xl font-black uppercase italic tracking-tighter transition-all duration-1000 group-hover:text-marvel-red group-hover:scale-110">Explore</h1>
        <div className="h-2 w-0 bg-marvel-red mx-auto transition-all duration-1200 group-hover:w-full"></div>
      </Link>
      
    </div>
  );
};