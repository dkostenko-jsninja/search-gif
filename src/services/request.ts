import { GifRequestOptions, GifSearchOptions } from '../types/common-types';

// Would be better to receive Giphy apiKey and baseUrl from env variables in production
const apiKey = 'ee3RPrKjlojKHxCmJ2LB18GgFNZl7TGv';
const baseUrl = 'https://api.giphy.com/v1/gifs';

const sendRequest = async (url: string, searchOptions: GifRequestOptions | GifSearchOptions): Promise<any> => {
  const fetchUrl = new URL(baseUrl + url);

  const params = {
    'api_key': apiKey,
    rating: 'g',
    ...searchOptions
  };

  fetchUrl.search = new URLSearchParams(params).toString();

  const fetchOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return fetch(fetchUrl.href, fetchOptions).then(async (res) => {
    if (res.ok) {
      return res.json();
    }

    let error;
    try {
      error = await res.json();
    } catch (e) {
      error = res;
    }

    throw error;
  });
}

export default sendRequest;
