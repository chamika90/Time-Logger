/*
 * Reducer actions related with comments
 */
import * as types from "./types";

export function addComments(payload) {
  return {
    type: types.ADD_COMMENTS,
    payload,
  };
}

export function updateComments(payload) {
  return {
    type: types.UPDATE_COMMENTS,
    payload,
  };
}
