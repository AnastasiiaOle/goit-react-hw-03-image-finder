import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ articles, onGetLargeImageURL }) => (
  <div>
    <ul className={styles.imageGallery}>
      {articles.map(article => (
        <li
          key={article.id}
          onClick={onGetLargeImageURL}
          onKeyPress={onGetLargeImageURL}
          className={styles.imageGalleryItem}
          role="presentation"
        >
          <ImageGalleryItem article={article} />
        </li>
      ))}
    </ul>
  </div>
);
ImageGallery.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  onGetLargeImageURL: PropTypes.func.isRequired,
};
export default ImageGallery;