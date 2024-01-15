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
  country = 'Country',
  disco = 'Disco',
  doom = 'Doom',
  downtempo = 'Downtempo',
  eleki = 'Eleki',
  funk = 'Funk',
  grunge = 'Grunge',
  hawaiian = 'Hawaiian',
  house = 'House',
  jazz = 'Jazz',
  library = 'Library',
  metal = 'Metal',
  minimalism = 'Minimalism',
  noise = 'Noise',
  orchestral = 'Orchestral',
  punk = 'Punk',
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
  releaseDate?: Date | (Date | undefined)[];
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

export type PressQuote = {
  projectName?: string;
  quote: string;
  author: string;
  outlet: string;
  url: string;
};

export enum ProjectType {
  game = 'Videogame',
  shortfilm = 'Shortfilm',
  podcast = 'Podcast',
  letsplay = 'LetsPlay',
}

type Publisher = {
  name: string;
  url: string;
};

export enum StoreName {
  instagram = 'Instagram',
  ios = 'iOS',
  itch = 'itch.io',
  itunes = 'iTunes',
  ps4 = 'PlayStation 4',
  steam = 'Steam',
  switch = 'Switch',
  vimeo = 'Vimeo',
  xboxone = 'Xbox One',
  youtube = 'YouTube',
}

export type Store = {
  name: StoreName;
  url?: string;
};
