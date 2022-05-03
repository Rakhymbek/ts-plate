import axios from "axios";
import { Dispatch } from "redux";
import { CharactersActionType } from "../reducers/charactersReducer";

export const fetchCharacters =
  ({ query = "", page = 1, sortBy = "" } = {}) =>
  (dispatch: Dispatch) => {
    dispatch({ type: CharactersActionType.SET_CHARACTERS });
    axios
      .get(
        `https://rickandmortyapi.com/api/character/?page=${page}&name=${query}&status=${sortBy}`
      )
      .then((res) => {
        console.log(res.data.results);
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
      })
      .catch(() => {
        dispatch({
          type: CharactersActionType.GET_ERROR,
          payload: "Characters not found",
        });
      });
  };
