import { createAction } from "redux-actions";

export const PROFILE_FETCH_STATE = "PROFILE/FETCH_STATE";
export const fetchInitialState = createAction(PROFILE_FETCH_STATE);
