import { REHYDRATE } from "redux-persist";

import {
  GET_CARDS_FAILED,
  GET_CARDS_REQUEST,
  GET_CARDS_SUCCESS,
  REMOVE_A_CARD,
} from "../types";

const initialState = {
  cards: [],
  loading: false,
  error: null,
};

const cards = (state = initialState, action) => {
  switch (action.type) {
    case REHYDRATE:
      if (action.payload)
        return { ...state, cards: action.payload.cards.cards };
      return { ...state };
    case GET_CARDS_REQUEST:
      return { ...state, loading: true };
    case GET_CARDS_SUCCESS:
      return { ...state, cards: action.cards.data, loading: false };
    case GET_CARDS_FAILED:
      return { ...state, error: action.message, loading: false };
    case REMOVE_A_CARD:
      return {
        ...state,
        cards: state.cards.filter((card) => card.id !== action.cardId),
      };
    default:
      return { ...state };
  }
};

export default cards;
