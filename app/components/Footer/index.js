/**
*
* Footer
*
*/

import React from 'react';

import styles from './styles.css';

class Footer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <footer className={styles.footer}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              footer
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
