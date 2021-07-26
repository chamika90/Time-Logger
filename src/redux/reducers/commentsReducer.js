import * as types from "../actions/types";

const initialState = {
  commentsList: [],
};

const commentsReducer = (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case types.ADD_COMMENTS:
      return {
        ...state,
        commentsList: [...state.commentsList, payload],
      };
    case types.UPDATE_COMMENTS:
      return {
        ...state,
        commentsList: payload,
      };

    default:
      return state;
  }
};

export default commentsReducer;
