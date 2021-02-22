import { GifRequestOptions, GifSearchOptions } from '../types/common-types';
import environment from '../environment/environment';

const sendRequest = async (url: string, searchOptions: GifRequestOptions | GifSearchOptions): Promise<any> => {
  const fetchUrl = new URL(environment.giphyBaseUrl + url);

  const params = {
    'api_key': environment.giphyApiKey || '',
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
