/**
*
* Header
*
*/

import React from 'react';

import styles from './styles.css';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <header className={styles.header}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              header
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
