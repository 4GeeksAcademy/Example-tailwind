import { useNavigate, Link } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulamos un registro. Aquí iría el POST a tu base de datos.
    alert("Agent registered successfully!");
    navigate("/login"); // Después de registrar, mandamos al login
  };

  return (
    <div className="min-h-screen bg-[url('https://cdn.marvel.com/content/1x/marvellogo_pb_bkgd_01.jpg')] bg-cover bg-center flex justify-center items-center p-4">
      <div className="bg-marvel-black p-10 max-w-md w-full marvel-clip border-t-4 border-white shadow-2xl relative">
        <div className="absolute bottom-0 right-0 w-8 h-8 bg-white red-corner"></div>

        <h2 className="text-white text-3xl font-black uppercase tracking-tighter mb-2">JOIN INITIATIVE</h2>
        <p className="text-zinc-400 text-xs uppercase tracking-widest mb-8">Create your hero profile</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="block text-zinc-400 text-[10px] font-bold uppercase tracking-widest mb-1">Codename / Alias</label>
            <input 
              type="text" 
              required
              className="w-full bg-zinc-800 text-white px-4 py-3 font-bold focus:outline-none focus:ring-2 focus:ring-white marvel-clip"
              placeholder="Iron Man"
            />
          </div>
          <div>
            <label className="block text-zinc-400 text-[10px] font-bold uppercase tracking-widest mb-1">Email</label>
            <input 
              type="email" 
              required
              className="w-full bg-zinc-800 text-white px-4 py-3 font-bold focus:outline-none focus:ring-2 focus:ring-white marvel-clip"
              placeholder="stark@industries.com"
            />
          </div>
          <div>
            <label className="block text-zinc-400 text-[10px] font-bold uppercase tracking-widest mb-1">Password</label>
            <input 
              type="password" 
              required
              className="w-full bg-zinc-800 text-white px-4 py-3 font-bold focus:outline-none focus:ring-2 focus:ring-white marvel-clip"
              placeholder="••••••••"
            />
          </div>
          
          <button type="submit" className="w-full bg-white text-marvel-black font-black uppercase tracking-widest py-4 mt-4 hover:bg-marvel-red hover:text-white transition-colors marvel-clip">
            Create Profile
          </button>
        </form>

        <p className="text-zinc-500 text-xs uppercase tracking-widest text-center mt-6">
          Already an agent? <Link to="/login" className="text-marvel-red hover:text-white">Login</Link>
        </p>
      </div>
    </div>
  );
};