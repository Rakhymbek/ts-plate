import { Reducer } from "redux";

export enum CharactersActionType {
  SET_CHARACTERS = "CHARACTERS/SET",
  SET_TOTAL_PAGES = "TOTAL_PAGES/SET",
  SET_PAGE = "PAGE/SET",
  SET_QUERY = "QUERY/SET",
  SET_SORT = "SORT/SET",
  GET_ERROR = "ERROR/GET",
}

export type FetchCharactersAction = {
  type: CharactersActionType.SET_CHARACTERS;
  payload: [];
};

export type FetchCharactersTotalPages = {
  type: CharactersActionType.SET_TOTAL_PAGES;
  payload: number;
};

export type FetchCharactersPages = {
  type: CharactersActionType.SET_PAGE;
  payload: number;
};

export type FetchCharactersQuery = {
  type: CharactersActionType.SET_QUERY;
  payload: string;
};

export type FetchCharactersSort = {
  type: CharactersActionType.SET_SORT;
  payload: string;
};

export type GetCharactersError = {
  type: CharactersActionType.GET_ERROR;
  payload: string;
};

type Location = {
  name: string;
  url: string;
};

export type Characters = {
  id: number;
  name: string;
  gender: string;
  location: Location;
  image: string;
  status?: string;
  species: string;
};

export type CharactersState = {
  characters: Characters[];
  totalPages: number;
  page: number;
  query: string;
  sort: string;
  error?: string;
};

const initState = {
  characters: [],
  episodes: [],
  query: "",
  totalPages: 0,
  page: 1,
  episodePage: 1,
  sort: "",
  error: "",
};

export type CharactersAction =
  | FetchCharactersAction
  | FetchCharactersTotalPages
  | FetchCharactersPages
  | FetchCharactersQuery
  | FetchCharactersSort
  | GetCharactersError;

export const charactersReducer: Reducer<CharactersState, CharactersAction> = (
  state = initState,
  action
) => {
  const newState = { ...state };
  newState.error = "";
  switch (action.type) {
    case CharactersActionType.SET_CHARACTERS:
      newState.characters = action.payload;
      break;
    case CharactersActionType.SET_TOTAL_PAGES:
      newState.totalPages = action.payload;
      break;
    case CharactersActionType.SET_PAGE:
      newState.page = action.payload;
      break;
    case CharactersActionType.SET_QUERY:
      newState.query = action.payload;
      break;
    case CharactersActionType.SET_SORT:
      newState.sort = action.payload;
      break;
    case CharactersActionType.GET_ERROR:
      newState.error = action.payload;
      break;
    default:
      return state;
  }
  return newState;
};
