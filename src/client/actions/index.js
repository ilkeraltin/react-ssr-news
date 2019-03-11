import axios from 'axios';
import config from '../../../config';

export const FETCH_ARTICLES = 'fetch_articles';

export const fetchArticles = source => async dispatch => {
  let url;
  if (source) {
    url = `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${config.apikey}`;
  } else {
    url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${config.apikey}`;
  }

  const res = await axios.get(url);

  dispatch({
    type: FETCH_ARTICLES,
    payload: res.data.articles
  });
};
