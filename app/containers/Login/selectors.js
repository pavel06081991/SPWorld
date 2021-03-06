import { createSelector } from 'reselect';

/**
 * Direct selector to the login state domain
 */
const selectLoginDomain = () => state => state.get('login');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Login
 */

const selectLogin = () => createSelector(
  selectLoginDomain(),
  (substate) => substate.toJS()
);

export default selectLogin;
export {
  selectLoginDomain,
};
