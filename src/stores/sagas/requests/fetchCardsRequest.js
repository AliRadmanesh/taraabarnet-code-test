import axios from "axios";

const url = "http://localhost:8585/cards";

const fetchCards = () => {
  return axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export default fetchCards;
