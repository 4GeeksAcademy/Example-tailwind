import { useParams } from "react-router-dom";
import { useAppContext } from "../store/AppContext";

export const Details = () => {
  const { id } = useParams();
  const { data } = useAppContext();
  const all = [...data.marvel, ...data.dc, ...data.others];
  const hero = all.find(item => item.id === parseInt(id));

  if (!hero) return <div className="p-20 text-center font-black uppercase tracking-widest">Loading...</div>;

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="bg-marvel-black pt-16 md:pt-0 border-b-8 border-marvel-red text-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 flex justify-center md:justify-end pr-0 md:pr-16 relative z-10">
            <img src={hero.images.lg} className="w-64 md:w-[420px] shadow-2xl border-4 border-white transform md:translate-y-16" alt={hero.name} />
          </div>
          <div className="w-full md:w-1/2 p-10 md:p-24 text-center md:text-left">
            <h4 className="text-marvel-red font-black uppercase tracking-widest text-sm mb-4">{hero.biography.publisher}</h4>
            <h1 className="text-7xl md:text-9xl font-black uppercase italic leading-none mb-6 tracking-tighter">{hero.name}</h1>
            <p className="text-zinc-500 text-xl font-bold uppercase tracking-widest">{hero.biography.fullName}</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-32 md:mt-40 flex flex-col md:flex-row gap-16">
        <div className="md:w-2/3">
          <h2 className="text-4xl font-black uppercase italic border-b-4 border-marvel-red inline-block mb-10">Power Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {Object.entries(hero.powerstats).map(([stat, value]) => (
              <div key={stat} className="space-y-2">
                <div className="flex justify-between font-black uppercase text-xs tracking-widest"><span>{stat}</span><span className="text-marvel-red">{value}%</span></div>
                <div className="h-3 bg-zinc-100"><div className="h-full bg-marvel-red" style={{ width: `${value}%` }}></div></div>
              </div>
            ))}
          </div>
          <h2 className="text-4xl font-black uppercase italic border-b-4 border-marvel-red inline-block mb-10 mt-16 text-marvel-black">Biography</h2>
          <p className="text-2xl text-zinc-600 leading-relaxed italic border-l-8 border-zinc-100 pl-8">"Originally appeared in {hero.biography.firstAppearance}. Born in {hero.biography.placeOfBirth || "Unknown Location"}."</p>
        </div>
        <div className="md:w-1/3 bg-zinc-50 p-10 border-t-8 border-marvel-black">
          <h3 className="font-black uppercase text-2xl mb-8">Quick Facts</h3>
          <ul className="space-y-6">
            {[['Gender', hero.appearance.gender], ['Race', hero.appearance.race], ['Height', hero.appearance.height[1]], ['Alignment', hero.biography.alignment]].map(([label, value]) => (
              <li key={label} className="flex flex-col border-b border-zinc-200 pb-4 uppercase">
                <span className="text-zinc-400 text-[10px] font-black tracking-widest mb-1">{label}</span>
                <span className="font-bold text-marvel-black text-lg">{value || 'N/A'}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};