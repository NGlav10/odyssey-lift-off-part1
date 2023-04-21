export type GetTracksType = {
  tracksForHome: [TrackType];
};

export type TrackType = {
  author: AuthorType;
  id: string;
  length: Number;
  modulesCount: Number;
  thumbnail: string;
  title: string;
};

export type AuthorType = {
  name: string;
  photo: string;
};
