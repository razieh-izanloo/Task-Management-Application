import { useState } from "react";
import { TaskManagement } from "./taskManagement";
import { TaskFiltering } from "./taskFiltering";
import { TaskSorting } from "./taskSorting";
import { SearchBar } from "./searchBar";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const TaskList = () => {
  const [filter, setFilter] = useState<string>("All");
  const [sort, setSort] = useState<string>("date");
  const [search, setSearch] = useState<string>("");

  const tasks = useSelector((state: RootState) => state.tasks.tasks);

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
    <div>
      <h2>list task</h2>

      <div style={{ marginBottom: "10px" }}>
        <SearchBar search={search} setSearch={setSearch} />

        <TaskFiltering filter={filter} setFilter={setFilter} />
        <TaskSorting sort={sort} setSort={setSort} />
      </div>

      {sortedTasks.length === 0 ? (
        <p>تسکی موجود نیست</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              {["عنوان", "توضیحات", "اولویت", "وضعیت"].map((item) => (
                <th
                  key={item}
                  style={{ border: "1px solid #ccc", padding: "8px" }}
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedTasks.map((task) => (
              <tr key={task.id}>
                <TaskManagement task={task} />
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                  {task.description}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                  {task.priority}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                  {task.completed ? "Completed" : "Incomplete"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
