import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ onClick }) => (
  <div className ={styles.btn} >
 <button className={styles.Button} type="button" onClick={onClick}>
    Load More
  </button>
  </div>
);
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default Button;