import React, { useEffect, useState } from 'react';
import './Main.scss';

import { useDispatch, useSelector } from 'react-redux';

import { GifLoadType } from '../../types/common-types';
import { requestGifs, searchGifs } from '../../store/gif/gif.action';

function Main() {
  const dispatch = useDispatch();

  const { gifs, isRequestInProgress } = useSelector((state: any) => state.gifReducer);

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadGifs('add');
  }, []);

  const loadGifs = (type: GifLoadType) => {
    if (searchTerm) {
      dispatch(searchGifs({ limit: '30', offset: gifs.length.toString(), q: searchTerm }, type));
    } else {
      dispatch(requestGifs({ limit: '30', offset: gifs.length.toString() }, type));
    }
  }

  const loadMore = (element) => {
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      loadGifs('add');
    }
  }

  const handleSearch = (e) => {
    e.preventDefault();
    loadGifs('reset');
  }

  return (
    <div className="c-main">
      <form className="c-search" onSubmit={handleSearch}>
        <input type="text"
               className="c-search__input"
               placeholder="Search GIF"
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="c-search__btn">Search</button>
      </form>

      <div className="c-gifs-wrapper" onScroll={(e) => loadMore(e.target)}>
        <div className="c-gifs">
          {gifs.map((gif, index) => (
            <div className="c-gif" key={index}>
              <img className="c-gif__image" src={gif.images.downsized_medium.url} alt=""/>
            </div>
          ))}
        </div>

        {isRequestInProgress && (
          <svg className={gifs.length ? 'c-spinner' : 'c-spinner c-spinner--centered'} viewBox="0 0 50 50">
            <circle className="c-spinner__path" cx="25" cy="25" r="20" fill="none" strokeWidth="4"/>
          </svg>
        )}
      </div>
    </div>
  );
}

export default Main;
