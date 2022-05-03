import axios from "axios";
import { Dispatch } from "redux";
import { CharactersActionType } from "../reducers/charactersReducer";

export const fetchCharacters =
  ({ query = "", page = 1, sortBy = "" } = {}) =>
  (dispatch: Dispatch) => {
    axios
      .get(
        `https://rickandmortyapi.com/api/character/?page=${page}&name=${query}&status=${sortBy}`
      )
      .then((res) => {
        dispatch({
          type: CharactersActionType.SET_CHARACTERS,
          payload: res.data.results,
        });
        dispatch({
          type: CharactersActionType.SET_TOTAL_PAGES,
          payload: res.data.info.pages,
        });
        dispatch({
          type: CharactersActionType.SET_PAGE,
          payload: page,
        });
      });
    dispatch({ type: CharactersActionType.SET_CHARACTERS });
  };
