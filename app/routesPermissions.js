import { UserAuthWrapper } from 'redux-auth-wrapper';
import { routerActions } from 'react-router-redux';

export const IsUserAuthenticated = UserAuthWrapper({
  authSelector: state => state.user,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'IsUserAuthenticated'
});

export const IsUserAdmin = UserAuthWrapper({
  authSelector: state => state.user,
  redirectAction: routerActions.replace,
  failureRedirectPath: '/abc',
  wrapperDisplayName: 'IsUserAdmin',
  predicate: user => user.isAdmin,
  allowRedirectBack: false
});