import axios from "axios";
import { Dispatch } from "redux";
import { Task, TaskAction, TaskActionType } from "../reducers/tasksReducer";

export const fetchTasks = () => (dispatch: Dispatch<TaskAction>) => {
    dispatch({ type: TaskActionType.FETCH_TASKS });
    axios
      .get<Task[]>(
        "https://kdwed-f1dd2-default-rtdb.europe-west1.firebasedatabase.app/tasks.json"
      )
      .then((res) => {
        setTimeout(() => {
          dispatch({
            type: TaskActionType.FETCH_TASKS_SUCCESS,
            payload: res.data,
          });
        }, 1000);
      })
      .catch(() => {
        dispatch({
          type: TaskActionType.FETCH_TASKS_REJECT,
          payload: "Ошибка при загрузке пользователей",
        });
      });
  };