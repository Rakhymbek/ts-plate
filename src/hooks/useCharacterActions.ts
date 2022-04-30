import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as characterActionCreators from "../store/actions/characterActionCreators";

export const useCharacterActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => {
    return bindActionCreators(characterActionCreators, dispatch);
  }, [dispatch]);
};
