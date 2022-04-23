import axios from "axios";

// const url = "http://localhost:8585/cards";
const url = "https://api.npoint.io/ea6d7a0a1210e646c756";

const fetchCards = () => {
  return axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export default fetchCards;
