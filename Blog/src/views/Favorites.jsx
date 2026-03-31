import { useAppContext } from "../store/AppContext";
import { HeroCard } from "../components/HeroCard";

export const Favorites = () => {
  const { favorites } = useAppContext();

  return (
    <main className="min-h-screen bg-white pb-20">
      <div className="bg-marvel-black py-20 text-center border-b-8 border-marvel-red text-white">
        <h1 className="text-7xl font-black uppercase italic">My <span className="text-marvel-red underline">Roster</span></h1>
        <p className="mt-4 font-bold text-zinc-500 uppercase tracking-widest">{favorites.length} Saved Heroes</p>
      </div>
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-6">
          {favorites.map(hero => <HeroCard key={hero.id} hero={hero} />)}
        </div>
      </div>
    </main>
  );
};