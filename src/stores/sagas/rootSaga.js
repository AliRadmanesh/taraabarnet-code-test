import { all } from "redux-saga/effects";

import watcherCardSaga from "./handlers/fetchCardsHandler";

export default function* rootSaga() {
  yield all([watcherCardSaga()]);
}
