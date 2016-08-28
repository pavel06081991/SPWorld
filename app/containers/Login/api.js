import { Schema, arrayOf, normalize } from 'normalizr';
import callApi from 'api';

// We use this Normalizr schemas to transform API responses from a nested form
// to a flat form where repos and users are placed in `entities`, and nested
// JSON objects are replaced with their IDs. This is very convenient for
// consumption by reducers, because we can easily build a normalized tree
// and keep it updated as we fetch more data.

// Read more about Normalizr: https://github.com/gaearon/normalizr

// Schemas for Github API responses.
const userSchema = new Schema('users', {
  idAttribute: 'login'
})

const repoSchema = new Schema('repos', {
  idAttribute: 'fullName'
})

repoSchema.define({
  owner: userSchema
})

const userSchemaArray = arrayOf(userSchema)
const repoSchemaArray = arrayOf(repoSchema)

// api services
export const fetchUser = login => callApi(`users/${login}`, userSchema)
export const fetchRepo = fullName => callApi(`repos/${fullName}`, repoSchema)
export const fetchStarred = url => callApi(url, repoSchemaArray)
export const fetchStargazers = url => callApi(url, userSchemaArray)