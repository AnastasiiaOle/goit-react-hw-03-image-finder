import axios from 'axios';

const fetchArticlesWithQuery = (searchQuery, page = 0) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=21575685-83d58e971510ed255bf05632f&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
};

export default {
  fetchArticlesWithQuery,
};



// import axios from 'axios';

// axios.defaults.baseURL = 'https://pixabay.com/api';

// const API_KEY = '21575685-83d58e971510ed255bf05632f';

// const fetchImages = (query, currentPage) => {
//     return axios
//     .get(
//         `https://pixabay.com/api/?q=${query}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
//     )
//     .then(response => response.data.hits);

// };

// export default { fetchImages,
//  };

