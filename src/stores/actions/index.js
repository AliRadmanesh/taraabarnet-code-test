import { GET_CARDS_REQUEST, REMOVE_A_CARD } from "../types";

export const getCards = () => {
  return {
    type: GET_CARDS_REQUEST,
  };
};

export const removeCard = (cardId) => {
  return {
    type: REMOVE_A_CARD,
    cardId,
  };
};
