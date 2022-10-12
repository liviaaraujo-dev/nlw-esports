interface GameBannerProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
  id: string;
}

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
}

export function GameBanner(props: GameBannerProps) {
  return (
    <a className="relative rounded-lg overflow-hidden">
      <img src={props.bannerUrl} alt="" />

      <div className="w-full pt-8 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">{props.title}</strong>
        <span className="text-zinc-300 text-sm block">
          {props.adsCount} anúncio(s)
        </span>
      </div>
    </a>
  );
}
