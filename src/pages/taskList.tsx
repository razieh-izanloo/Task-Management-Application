import { useState } from "react";
import { TaskFiltering } from "../components/taskFiltering";
import { TaskSorting } from "../components/taskSorting";
import { SearchBar } from "../components/searchBar";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { toggleTaskStatus } from "../redux/tasksSlice";
import { Link } from "react-router-dom";

export const TaskList = () => {
  const [filter, setFilter] = useState<string>("All");
  const [sort, setSort] = useState<string>("date");
  const [search, setSearch] = useState<string>("");

  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch<AppDispatch>();

  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") return true;
    if (filter === "Active") return !task.completed;
    if (filter === "Completed") return task.completed;
    return true;
  });

  const searchedTasks = filteredTasks.filter(
    (task) =>
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.description.toLowerCase().includes(search.toLowerCase())
  );

  const sortedTasks = [...searchedTasks].sort((a, b) => {
    if (sort === "date") {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    } else if (sort === "priority") {
      const priorityOrder: Record<string, number> = {
        High: 3,
        Medium: 2,
        Low: 1,
      };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    }
    return 0;
  });

  return (
    <div className="taskList">
      <div className="flex" id="tools">
        <SearchBar search={search} setSearch={setSearch} />
        <div className="flex">
          <TaskFiltering filter={filter} setFilter={setFilter} />
          <div className="wrapper-sort">
            <TaskSorting sort={sort} setSort={setSort} />
            <Link to="/taskCreation">
              <img src="/add.svg" width="15px" />
            </Link>
          </div>
        </div>
      </div>

      {sortedTasks.length === 0 ? (
        <p>Teski is not available</p>
      ) : (
        <div id="table-wrapper">
          <table>
            <thead>
              <tr>
                {["Title", "Description", "Priority", "Status"].map((item) => (
                  <th key={item}>{item}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sortedTasks.map((task) => {
                const status = task.completed ? "Completed" : "Incomplete";
                return (
                  <tr
                    key={task.id}
                    className={`${
                      task.completed ? "text-decoration-line" : ""
                    }`}
                  >
                    <td>{task.title}</td>
                    <td>{task.description}</td>
                    <td>{task.priority}</td>
                    <td onClick={() => dispatch(toggleTaskStatus(task.id))}>
                      <span className={`status ${status}`}>{status}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TaskList;
