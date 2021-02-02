export type GifRequestOptions = {
  offset: string,
  limit: string
};

export type GifSearchOptions = GifRequestOptions & {
  q: string;
};

export type GifLoadType = 'add' | 'reset';
