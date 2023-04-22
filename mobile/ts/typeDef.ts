export type GetTracksType = {
  tracksForHome: [TrackType];
};

export type GetTrackType = {
  track: TrackType;
};

export type TrackType = {
  author: AuthorType;
  id: string;
  length: Number;
  modulesCount: Number;
  thumbnail: string;
  title: string;
  numberOfViews: number;
  modules: [ModuleType];
  description: string;
};

export type AuthorType = {
  name: string;
  photo: string;
};

export type ModuleType = {
  id: string;
  title: string;
  length: number;
};
