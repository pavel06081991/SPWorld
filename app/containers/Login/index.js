/*
 *
 * Login
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectLogin from './selectors';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';
import Box from 'components/Box';
import { SIZES } from 'settings';
import { Field, reduxForm } from 'redux-form/immutable';
import { TextField } from 'redux-form-material-ui';
import Wrapper from 'components/Wrapper';
import RaisedButton from 'material-ui/RaisedButton';

export class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.login + ' row center-xs'}>
        <Helmet
          title="Login"
          meta={[
            { name: 'description', content: 'Description of Login' },
          ]}
        />
        <div className="col-xs-3">
          <Box>
            <form>
              <div className="row">
                <div className="col-xs-12">
                  <Field name="login" component={TextField} hintText="Login"
                         floatingLabelText="Login"
                         floatingLabelFixed={true}
                         fullWidth={true} />
                </div>
                <div className="col-xs-12">
                  <Field name="password" component={TextField} hintText="Password"
                         floatingLabelText="Password"
                         floatingLabelFixed={true}
                         fullWidth={true}
                         type="password" />
                </div>
                <div className="col-xs-12">
                  <Wrapper marginTop={SIZES.XS}>
                    <RaisedButton label="Full width" secondary={true} fullWidth={true}/>
                  </Wrapper>
                </div>
              </div>
            </form>
          </Box>
        </div>
      </div>
    );
  }
}

Login = reduxForm({
  form: 'Login'
})(Login);

const mapStateToProps = selectLogin();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
