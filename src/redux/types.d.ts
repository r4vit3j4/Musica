export interface IPlayerInitialState {
  currentSongs: null;
}

export interface ISearchInitialState {
  data: {
    songs: Song[];
    albums: Album[];
  };
  status: {
    isLoading: boolean;
    isError: boolean;
    error: string;
  };
}

export interface Song {
  id: string;
  title: string;
  image: string;
  album: string;
  type: string;
  description: string;
}

export interface Album {
  id: string;
  title: string;
  image: string;
  music: string;
  type: string;
  description: string;
}

export interface ISong {
  id: string;
  title: string;
  image: string;
  album: string;
}
