import store from "../store/store";
import { REQUEST_SUCCEEDED, REQUEST_SENT } from "./types";

export function showLoader() {
  return store.dispatch({ type: REQUEST_SENT });
}

export function hideLoader() {
  return store.dispatch({ type: REQUEST_SUCCEEDED });
}
