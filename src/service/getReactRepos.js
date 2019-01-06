import axios from 'axios';

// asyc call to fetch list of collections.
const getReactRepos = (item) => {
  const url = item || "books";
  return axios.get(`${url}.json`);
};

export default getReactRepos;
