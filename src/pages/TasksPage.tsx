import { Container, Grid, styled } from "@mui/material";
import { error } from "console";
import { useEffect } from "react";
import TasksList from "../components/TasksList";
import { useTaskActions } from "../hooks/useTasksAction";
import { useTypedSelector } from "../hooks/useTypedSelector";

export const TasksPage = () => {
  const { tasks, error, loading } = useTypedSelector((state) => state.tasks);
  const { fetchTasks } = useTaskActions();

  const TasksHead = styled("h1")`
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 35px;
    letter-spacing: 0.01em;
    color: #1d1d1f;
  `;

  const TasksHeader = styled("h3")`
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.015em;
    text-transform: uppercase;
    color: #1d1d1f;
    position: relative;
    margin-bottom: 24px;
    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 3px;
      top: 100%;
      background: #787878;
      left: 0;
      margin-top: 10px;
    }
  `;

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  if (loading) {
    return (
      <div
        style={{
          fontSize: 50,
          textAlign: "center",
          position: "absolute",
          transform: "translate(50%)",
          top: "50%",
        }}
      >
        Salamalykum, nicho netu, uhodite
      </div>
    );
  }

  if (error) {
    return <h1 style={{ border: "1px solid red" }}>{error}</h1>;
  }

  return (
    <Container>
      <TasksHead>Задачи Сагын Рахымбека</TasksHead>

      <Grid
        container
        sx={{ justifyContent: "space-between", textAlign: "center"}}
        columns={{ xs: 4, md: 12 }}
      >
        {tasks.map((subtasks, index) => (
          <Grid item xs={2} key={subtasks.stage}>
            <TasksHeader>{subtasks.stageName}</TasksHeader>
            <TasksList subtasks={subtasks} index={index} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
