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
  myTeamScoreOne: number;
  enemyTeamScoreOne: number;
  gameOne: string;
  mapOne: string;
  myTeamScoreTwo: number;
  enemyTeamScoreTwo: number;
  gameTwo: string;
  mapTwo: string;
  myTeamScoreThree: number;
  enemyTeamScoreThree: number;
  gameThree: string;
  mapThree: string;
  mapFour: string;
  mapFive: string;
};
