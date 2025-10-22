import { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { AppDispatch } from "../redux/store";
import { addTask } from "../redux/tasksSlice";

export const TaskCreation = () => {
  const [values, setValues] = useState({
    title: "",
    description: "",
    priority: "",
  });

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!values.title.trim() || !values.description.trim())
      return toast.error("Please fill in the required fields!");

    const newTask = {
      id: Date.now(),
      title: values.title,
      description: values.description,
      priority: values.priority,
      completed: false,
      createdAt: new Date(),
    };

    dispatch(addTask(newTask));

    setValues({
      title: "",
      description: "",
      priority: "Medium",
    });
    toast.success("New task added.");
  };

  return (
    <>
      <h2>create new task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="title">Title</label>
            <span>*</span>
          </div>
          <input
            type="text"
            name="title"
            onChange={(e) =>
              setValues((prev) => ({ ...prev, title: e.target.value }))
            }
            value={values.title}
            id="title"
          />
        </div>
        <div>
          <div>
            <label htmlFor="description">Description</label>
            <span>*</span>
          </div>
          <textarea
            name="description"
            id="description"
            onChange={(e) =>
              setValues((prev) => ({ ...prev, description: e.target.value }))
            }
            value={values.description}
          />
        </div>
        <select
          value={values.priority}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, priority: e.target.value }))
          }
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button>create</button>
      </form>
      <ToastContainer />
    </>
  );
};
