export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  links: {
    x: string;
    cod: string;
  };
};

export type NavItem = {
  title: string;
  href: string;
};

export type MarketingConfig = {
  mainNav: NavItem[];
};

export type GameModeConfig = {
  mode: {
    hp: string;
    sd: string;
    ctr: string;
  };
};

export type TeamInput = {
  myTeamName: string;
  enemyTeamName: string;
  myTeamScore1: number;
  enemyTeamScore1: number;
  game1: string;
  map1: string;
  myTeamScore2: number;
  enemyTeamScore2: number;
  game2: string;
  map2: string;
  myTeamScore3: number;
  enemyTeamScore3: number;
  game3: string;
  map3: string;
  map4: string;
  map5: string;
};

export type TeamConfig = {
  myTeamName: string;
  enemyTeamName: string;
  myTeamScore1: number;
  enemyTeamScore1: number;
  game1: string;
  map1: string;
  myTeamScore2: number;
  enemyTeamScore2: number;
  game2: string;
  map2: string;
  myTeamScore3: number;
  enemyTeamScore3: number;
  game3: string;
};
