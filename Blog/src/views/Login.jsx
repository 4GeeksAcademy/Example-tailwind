import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAppContext } from "../store/AppContext";

export const Login = () => {
  const { login } = useAppContext();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulamos un login exitoso. Aquí iría tu llamada al backend.
    login({ name: "Avenger", email: email });
    navigate("/account"); // Redirige a cuenta tras iniciar sesión
  };

  return (
    <div className="min-h-screen bg-[url('https://cdn.marvel.com/content/1x/marvellogo_pb_bkgd_01.jpg')] bg-cover bg-center flex justify-center items-center p-4">
      <div className="bg-marvel-black p-10 max-w-md w-full marvel-clip border-t-4 border-marvel-red shadow-2xl relative">
        {/* Decoración esquina */}
        <div className="absolute bottom-0 right-0 w-8 h-8 bg-marvel-red red-corner"></div>

        <h2 className="text-white text-3xl font-black uppercase tracking-tighter mb-2">ACCESS HUB</h2>
        <p className="text-zinc-400 text-xs uppercase tracking-widest mb-8">Enter your credentials</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label className="block text-marvel-red text-[10px] font-bold uppercase tracking-widest mb-1">Email</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white text-marvel-black px-4 py-3 font-bold focus:outline-none focus:ring-2 focus:ring-marvel-red marvel-clip"
              placeholder="agent@shield.com"
            />
          </div>
          <div>
            <label className="block text-marvel-red text-[10px] font-bold uppercase tracking-widest mb-1">Password</label>
            <input 
              type="password" 
              required
              className="w-full bg-white text-marvel-black px-4 py-3 font-bold focus:outline-none focus:ring-2 focus:ring-marvel-red marvel-clip"
              placeholder="••••••••"
            />
          </div>
          
          <button type="submit" className="w-full bg-marvel-red text-white font-black uppercase tracking-widest py-4 mt-4 hover:bg-white hover:text-marvel-black transition-colors marvel-clip">
            Login
          </button>
        </form>

        <p className="text-zinc-500 text-xs uppercase tracking-widest text-center mt-6">
          Need an access code? <Link to="/register" className="text-white hover:text-marvel-red">Register</Link>
        </p>
      </div>
    </div>
  );
};