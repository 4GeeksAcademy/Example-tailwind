import { Navigate, Link } from "react-router-dom";
import { useAppContext } from "../store/AppContext";

export const Account = () => {
  const { user, favorites } = useAppContext();

  // Si alguien intenta entrar a /account sin iniciar sesión, lo echamos al login
  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen bg-white p-10">
      {/* Cabecera estilo Marvel */}
      <div className="mb-10 border-l-4 border-marvel-red pl-4">
        <h1 className="text-4xl font-black uppercase tracking-tighter text-marvel-black">
          HELLO, {user.name || "HERO"}
        </h1>
        <p className="text-zinc-500 uppercase tracking-widest text-sm">Welcome to your secret base</p>
      </div>

      <h2 className="text-2xl font-black uppercase tracking-tighter text-marvel-black mb-6 border-b-2 border-marvel-red inline-block">
        YOUR FAVORITE ROSTER
      </h2>

      {favorites.length === 0 ? (
        <div className="bg-zinc-100 p-10 text-center marvel-clip max-w-2xl">
          <p className="text-xl font-bold text-zinc-500 uppercase">You don't have any favorites yet.</p>
          <Link to="/characters" className="inline-block mt-4 bg-marvel-red text-white font-bold uppercase tracking-widest px-6 py-3 marvel-clip hover:bg-marvel-black transition-colors">
            Find Heroes
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {favorites.map((hero) => (
            <div key={hero.id} className="relative group cursor-pointer bg-marvel-black marvel-clip hover:-translate-y-2 transition-transform duration-300">
              <img 
                src={hero.images.md} 
                alt={hero.name} 
                className="w-full h-64 object-cover border-b-4 border-marvel-red group-hover:opacity-80 transition-opacity"
              />
              <div className="p-4">
                <h3 className="text-white font-bold uppercase tracking-wider">{hero.name}</h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};