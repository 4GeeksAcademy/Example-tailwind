import { Link } from "react-router-dom";
import { useAppContext } from "../store/AppContext";

export const HeroCard = ({ hero }) => {
  const { toggleFavorite, favorites } = useAppContext();
  const isFav = favorites.some(f => f.id === hero.id);

  return (
    <div className="min-w-[170px] max-w-[170px] group/card snap-start">
      <div className="h-[230px] overflow-hidden relative bg-zinc-900">
        <Link to={`/details/${hero.id}`}>
          <img
            src={hero.images.sm}
            className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
            alt={hero.name}
          />
        </Link>
      </div>
      <div className="bg-marvel-black p-4 h-28 relative flex justify-between items-start">
        <div className="absolute top-0 left-0 w-full h-1 bg-marvel-red scale-x-0 group-hover/card:scale-x-100 transition-transform origin-left duration-300"></div>
        <div className="flex-1 mr-2">
          <p className="text-white font-bold uppercase text-sm leading-tight group-hover/card:text-marvel-red transition-colors">{hero.name}</p>
          <p className="text-zinc-500 text-[10px] font-bold uppercase mt-2 leading-none">{hero.biography.fullName || "Secret Identity"}</p>
        </div>
        <button onClick={() => toggleFavorite(hero)} className={`text-xl transition-all hover:scale-125 z-20 ${isFav ? 'text-marvel-red' : 'text-zinc-600'}`}>
          {isFav ? "★" : "☆"}
        </button>
        <div className="absolute bottom-0 right-0 w-4 h-4 bg-marvel-red red-corner"></div>
      </div>
    </div>
  );
};