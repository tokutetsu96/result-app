interface MapConfig {
  [key: string]: string[];
  hp: string[];
  sd: string[];
  ctr: string[];
}

export const mapconfig: MapConfig = {
  hp: ["※選択してください", "hp1", "hp2", "hp3", "hp4", "hp5"],
  sd: ["※選択してください", "sd1", "sd2", "sd3", "sd4", "sd5"],
  ctr: ["※選択してください", "ctr1", "ctr2", "ctr3"],
};

interface HardpointMapConfig {
  [key: string]: string;
  hp1: string;
  hp2: string;
  hp3: string;
  hp4: string;
  hp5: string;
}
export const hardpointMapConfig: HardpointMapConfig = {
  hp1: "/images/hardpoint/hp1.png",
  hp2: "/images/hardpoint/hp2.png",
  hp3: "/images/hardpoint/hp3.png",
  hp4: "/images/hardpoint/hp4.png",
  hp5: "/images/hardpoint/hp5.png",
};

interface SearchAndDestroyMapConfig {
  [key: string]: string;
  sd1: string;
  sd2: string;
  sd3: string;
  sd4: string;
  sd5: string;
}
export const searchAndDestroyMapConfig: SearchAndDestroyMapConfig = {
  sd1: "/images/searchanddestroy/sd1.png",
  sd2: "/images/searchanddestroy/sd2.png",
  sd3: "/images/searchanddestroy/sd3.png",
  sd4: "/images/searchanddestroy/sd4.png",
  sd5: "/images/searchanddestroy/sd5.png",
};

interface ControlMapConfig {
  [key: string]: string;
  ctr1: string;
  ctr2: string;
  ctr3: string;
}
export const controlMapConfig: ControlMapConfig = {
  ctr1: "/images/control/ctr1.png",
  ctr2: "/images/control/ctr2.png",
  ctr3: "/images/control/ctr3.png",
};
