import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as tasksActionCreators from "../store/actions/tasksActionCreators";

export const useTaskActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => {
    return bindActionCreators(tasksActionCreators, dispatch);
  }, [dispatch]);
};