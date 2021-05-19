import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ article }) => (
  <div>
    <img src={article.webformatURL} data-src={article.largeImageURL} alt="" className={styles.imageGalleryItemImage} />
  </div>
);
ImageGalleryItem.propTypes = {
  article: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
export default ImageGalleryItem;