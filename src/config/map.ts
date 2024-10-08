interface MapConfig {
  [key: string]: string[];
  hp: string[];
  sd: string[];
  ctr: string[];
}

export const mapconfig: MapConfig = {
  hp: ["hp1", "hp2", "hp3", "hp4", "hp5"],
  sd: ["sd1", "sd2", "sd3", "sd4", "sd5"],
  ctr: ["ctr1", "ctr2", "ctr3"],
};
