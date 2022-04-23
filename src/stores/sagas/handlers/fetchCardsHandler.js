import { call, put, takeLatest } from "redux-saga/effects";

import fetchCards from "../requests/fetchCardsRequest";
import {
  GET_CARDS_FAILED,
  GET_CARDS_REQUEST,
  GET_CARDS_SUCCESS,
} from "../../types";

function* handleGetCards() {
  try {
    const cards = yield call(fetchCards);
    yield put({ type: GET_CARDS_SUCCESS, cards: cards });
  } catch (error) {
    yield put({ type: GET_CARDS_FAILED, message: error.message });
  }
}

function* watcherCardSaga() {
  yield takeLatest(GET_CARDS_REQUEST, handleGetCards);
}

export default watcherCardSaga;
