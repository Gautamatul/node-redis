import {  SET_ACCOUNTS } from "../Actions/AccountActions";

const intialState = {
  accounts: [],
  account : {},
  loading: false
}

export default function accountReducer(previousState = intialState, action) {
  switch (action.type) {
    case SET_ACCOUNTS:
      return { ...previousState, accounts: action.payload }

    default:
      return previousState;
  }
}