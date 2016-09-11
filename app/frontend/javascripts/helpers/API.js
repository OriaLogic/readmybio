import fetch from 'isomorphic-fetch';

// URL param that must contain the CSRF token
const csrfParam = () => $('meta[name=csrf-param]').attr('content');

// Up-to-date Cross-Site Request Forgery token
const csrfToken = () => $('meta[name=csrf-token]').attr('content');

export const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

export const parseJSON = (response, options) => {
  if (options.noJSON) return response;
  return response.json();
}

const logIfDev = (url, response) => {
  if (rails_env === 'development') {
    console.log(`API CALL to "${url}"`);
    console.log(response);
  }

  return response;
}

export const authenticatedFetch = (url, options) => fetch(url, {
  ...options,
  credentials: 'same-origin',
  headers: {
    'X-CSRF-Token': csrfToken()
  }
});

export const defaultFetch = (url, options = {}) => {
  return authenticatedFetch(url, options)
    .then(checkStatus)
    .then((response) => parseJSON(response, options))
    .then((response) => logIfDev(url, response));
};
