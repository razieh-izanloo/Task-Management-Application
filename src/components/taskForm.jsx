import { useState } from "react";

export const TaskForm = () => {
  const [values, setValues] = useState({
    title: "",
    description: "",
    priority: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.title.trim() || !values.description.trim())
      return alert("Please fill in the required fields");

    const newTask = {
      id: Date.now(),
      title: values.title,
      description: values.description,
      priority: values.priority,
      completed: false,
      createdAt: new Date(),
    };

    localStorage.setItem("tasks", JSON.stringify(newTask));

    setValues({
      title: "",
      description: "",
      priority: "Medium",
    });
  };

  return (
    <>
      <h2>create new task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          onChange={(e) =>
            setValues((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        <textarea
          type="text"
          name="description"
          onChange={(e) =>
            setValues((prev) => ({ ...prev, description: e.target.value }))
          }
        />
        <select value={values.priority} onChange={(e) => e.target.value}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button>create</button>
      </form>
    </>
  );
};
