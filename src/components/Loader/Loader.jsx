import React from 'react';
import Spinner from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './Loader.module.css';

export default function Loader() {
  return <Spinner className ={styles.Loader} type="TailSpin" color="#00BFFF" height={60} width={60} />;
}
