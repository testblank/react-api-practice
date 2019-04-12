import axios from 'axios';

const API_KEY = '12152292-b1c62c7334c5c3281ea2da2a8';
const TYPE = 'photo';
const Q = 'sakura';

//https://pixabay.com/api/?key=12152292-b1c62c7334c5c3281ea2da2a8&q=sakura&image_type=photo
// data.hits.largeImageURL, likes, previewURL, tags, views, webformatURL
export function getImage(pageNum = 1) {
  return axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${Q}&image_type=${TYPE}&page=${pageNum}`);
}

