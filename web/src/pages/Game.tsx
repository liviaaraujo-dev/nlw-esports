import { DuoCard } from "../components/DuoCard";
import "../styles/main.css";

export function Game() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col my-8">
      <h2 className="font-bold text-white text-3xl">League of Legends</h2>
      <p className="text-zinc-400 text-lg mt-1">Conecte-se e comece a jogar!</p>
      <div className="mt-5">
        <img
          src="https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg"
          alt=""
          className="w-60"
        />
      </div>

      <div>
        <DuoCard />
      </div>
    </div>
  );
}
