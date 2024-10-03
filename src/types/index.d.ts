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

export type TeamInput = {
  myTeamName: string;
  enemyTeamName: string;
};
