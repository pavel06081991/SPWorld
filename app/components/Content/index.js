/**
*
* Content
*
*/

import React from 'react';

import styles from './styles.css';

class Content extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.content}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
