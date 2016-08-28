/**
*
* Box
*
*/

import React from 'react';

import styles from './styles.css';

class Box extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.box}>
        {this.props.children}
      </div>
    );
  }
}

export default Box;
