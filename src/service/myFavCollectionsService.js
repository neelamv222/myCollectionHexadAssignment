import axios from 'axios';

// asyc call to fetch list of collections.
const myFavCollectionsService = (item) => {
  const url = item || "books";
  return axios.get(`${url}.json`);
};

export default myFavCollectionsService;
