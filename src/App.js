import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import Notification from './components/Notification/Notification';
import services from './services/services';

import styles from './App.module.css';

export default class App extends Component {
  state = {
    articles: [],
    loading: false,
    error: null,
    searchQuery: '',
    page: 1,
    largeImageURL: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;
    const prevQuery = prevState.searchQuery;
    const nextQuery = searchQuery;
    const prevPage = prevState.page;
    const nextPage = page;
    if (prevQuery !== nextQuery) {
      this.fetchArticles();
    }
    if (prevPage !== nextPage) {
      this.fetchArticles();
    }
    if (prevState.articles.length > 12) {
      this.scrollTo();
    }
  }

  scrollTo = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  fetchArticles = () => {
    const { searchQuery, page } = this.state;
    this.setState({ loading: true });
    services
      .fetchArticlesWithQuery(searchQuery, page)
      .then(article =>
        this.setState(prevState => ({
          articles: [...prevState.articles, ...article],
        })),
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  loadMore = () => {
    const { page } = this.state;
    this.setState({
      page: page + 1,
    });
  };

  handleSubmit = query => {
    this.setState({
      searchQuery: query,
      page: 1,
      articles: [],
    });
  };

  getlargeImageURL = e => {
    this.setState({ largeImageURL: e.target.dataset.src });
  };

  closeModal = () => this.setState({ largeImageURL: '' });

  render() {
    const { articles, loading, largeImageURL, error } = this.state;
    return (
      <div className={styles.App}>
        <SearchBar onSubmit={this.handleSubmit} />
        {error && <Notification />}
        {articles.length > 0 && (
          <ImageGallery articles={articles} onClose={this.closeModal} onGetLargeImageURL={this.getlargeImageURL} />
        )}
        {loading && <Loader />}
        {articles.length > 0 && !loading && <Button onClick={this.loadMore} />}
        {largeImageURL && <Modal onClose={this.closeModal} largeImageURL={largeImageURL} />}
      </div>
    );
  }
};
