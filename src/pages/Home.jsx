import { TaskCreation } from "../components/taskCreation";
import { TaskList } from "../components/taskList";

export default function Home() {
  return (
    <>
      <h1> Task Management Application</h1>
      <TaskCreation />
      <TaskList />
    </>
  );
}
