import { GET_POST_ERRORS } from "../actions/post_actions";

const initalState = { postErrors: [] };

export default function errorReducer(state = initalState, action) {
  switch (action.type) {
    case GET_POST_ERRORS:
      return {
        postErrors: action.payload,
        serErrors: [],
      };
    default:
      return state;
  }
}
