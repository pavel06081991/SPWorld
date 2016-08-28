/**
*
* Wrapper
*
*/

import React from 'react';

import styles from './styles.css';
import {SIZES} from 'settings';

class Wrapper extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    let rootElementModifiers = ' ',
      marginTop = this.props.marginTop;

    if (marginTop) {
      if (marginTop === SIZES.XS) {
        rootElementModifiers += styles['wrapper__margin-top_xs'] + ' ';
      }
    }

    return (
      <div className={styles.wrapper + rootElementModifiers}>
        {this.props.children}
      </div>
    );
  }
}

export default Wrapper;
