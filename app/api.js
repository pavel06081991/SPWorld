import { Schema, arrayOf, normalize } from 'normalizr';
import { camelizeKeys } from 'humps';

const API_ROOT = 'https://api.github.com/';

function getNextPageUrl(response) {
  const link = response.headers.get('link');

  if (!link) {
    return null;
  }

  const nextLink = link.split(',').find(s => s.indexOf('rel="next"') > -1);

  if (!nextLink) {
    return null;
  }

  return nextLink.split(';')[0].slice(1, -1);
}

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
export default function callApi(endpoint, schema) {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;

  return fetch(fullUrl)
    .then(response =>
      response.json().then(json => ({ json, response }))
    ).then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json);
      }

      const camelizedJson = camelizeKeys(json);
      const nextPageUrl = getNextPageUrl(response);

      return Object.assign({},
        normalize(camelizedJson, schema),
        { nextPageUrl }
      )
    })
    .then(
      response => ({response}),
      error => ({error: error.message || 'Something bad happened'})
    )
}