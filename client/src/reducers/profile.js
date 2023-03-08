import {
  GET_PROFILE,
  GET_PROFILES,
  UPDATE_PROFILE,
  CLEAR_PROFILE,
  PROFILE_ERROR,
  GET_REPOSITORIES,
  NO_REPOSITORIES,
} from "../actions/types";

const initialState = {
  profile: null,
  profiles: [],
  repositories: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
        loading: false,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        profile: null, // Added this
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        repositories: [],
        loading: false,
      };
    case GET_REPOSITORIES:
      return {
        ...state,
        repositories: payload,
        loading: false,
      };
    case NO_REPOSITORIES:
      return {
        ...state,
        repositories: [],
      };
    default:
      return state;
  }
}
