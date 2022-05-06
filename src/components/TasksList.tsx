import React, { FC } from "react";
import { Item, Task } from "../store/reducers/tasksReducer";
import { TasksCard } from "./TasksCard";

type Props = {
  subtasks: Task;
  index: number;
};

export const TasksList: FC<Props> = ({ subtasks, index }) => {
  return (
    <div>
      {subtasks?.items.map((item: Item) =>
        !item.clientName ? "" : <TasksCard item={item} key={item.taskId} />
      )}
    </div>
  );
};

export default TasksList;
