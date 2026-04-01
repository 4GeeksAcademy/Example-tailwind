import { useRef } from "react";
import { useAppContext } from "../store/AppContext";
import { HeroCard } from "../components/HeroCard";

const Carousel = ({ title, items }) => {
  const scrollRef = useRef(null);
  const scroll = (offset) => scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });

  return (
    <section className="mb-14 relative group/section container mx-auto px-4">
      <div className="flex items-end justify-between border-b-2 border-zinc-200 mb-6 pb-2 text-marvel-black">
        <h2 className="text-3xl font-black uppercase italic tracking-tighter">{title} <span className="text-marvel-red">Universe</span></h2>
      </div>
      <button onClick={() => scroll(-500)} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/80 text-white w-12 h-12 opacity-0 group-hover/section:opacity-100 hover:bg-marvel-red font-bold transition-opacity">❮</button>
      <button onClick={() => scroll(500)} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/80 text-white w-12 h-12 opacity-0 group-hover/section:opacity-100 hover:bg-marvel-red font-bold transition-opacity">❯</button>
      <div ref={scrollRef} className="flex overflow-x-auto gap-6 no-scrollbar snap-x pb-4">
        {items.map(hero => <HeroCard key={hero.id} hero={hero} />)}
      </div>
    </section>
  );
};

export const Characters = () => {
  const { data } = useAppContext();
  return (
    <main className="pb-20 bg-white">
      <div className="bg-marvel-black py-16 mb-12 text-center text-white italic">
        <h1 className="text-5xl font-black uppercase tracking-tighter">Freak <span className="text-marvel-red underline">Database</span></h1>
      </div>
      <Carousel title="Marvel" items={data.marvel} />
      <Carousel title="DC" items={data.dc} />
      <Carousel title="Other" items={data.others} />
    </main>
  );
};