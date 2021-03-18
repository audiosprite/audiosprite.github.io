type Developer = {
  name: string;
  url?: string;
};

export enum Genre {
  afrobeat = 'Afrobeat',
  ambient = 'Ambient',
  bigband = 'Big Band',
  chamber = 'Chamber',
  chiptune = 'Chiptune',
  disco = 'Disco',
  doom = 'Doom',
  eleki = 'Eleki',
  funk = 'Funk',
  grunge = 'Grunge',
  house = 'House',
  jazz = 'Jazz',
  library = 'Library',
  metal = 'Metal',
  orchestral = 'Orchestral',
  rock = 'Rock',
  spiritual = 'Spirital',
  wonky = 'Wonky',
}

export type Project = {
  developer: Developer;
  earlyAccess?: boolean;
  genrePool?: (Genre | keyof Genre)[][]; // - generates tumblr style #tags with size/sort by counts per track
  musicStores?: MusicStore[];
  name: string;
  pressQuotes?: PressQuote[];
  publisher?: Publisher;
  releaseDate?: Date;
  roles: Role[];
  //   screenshotHero?: string;
  //   selectedTracks: [];
  stores?: Store[];
  trailer?: string;
  type: ProjectType;
  url?: string;
};

export enum MusicStoreName {
  apple = 'Apple Music',
  bandcamp = 'Bandcamp',
  spotify = 'Spotify',
  steam = 'Steam',
}

type MusicStore = {
  name: MusicStoreName;
  url: string;
};

export enum Role {
  music = 'Music',
  sfx = 'SFX',
}

type PressQuote = {
  quote: string;
  author: string;
  outlet: string;
  url: string;
};

export enum ProjectType {
  game = 'Videogame',
  shortfilm = 'Shortfilm',
  podcast = 'Podcast',
}

type Publisher = {
  name: string;
  url: string;
};

export enum StoreName {
  steam = 'Steam',
  switch = 'Switch',
  ps4 = 'PlayStation 4',
  xboxone = 'Xbox One',
  itch = 'itch.io',
  youtube = 'YouTube',
}

export type Store = {
  name: StoreName;
  url?: string;
};
