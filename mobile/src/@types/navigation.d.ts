export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      game: GameParams;
    }
  }
}

export interface GameParams {
  id: string;
  title: string;
  bannerUrl: string;
}
