import { Dispatch, SetStateAction } from "react";

export const TaskFiltering = (props: {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
}) => {
  const { filter, setFilter } = props;

  return (
    <>
      <label>
        <input
          type="radio"
          name="filter"
          value="All"
          checked={filter === "All"}
          onChange={() => setFilter("All")}
        />
        All
      </label>
      <label style={{ marginLeft: "10px" }}>
        <input
          type="radio"
          name="filter"
          value="Active"
          checked={filter === "Active"}
          onChange={() => setFilter("Active")}
        />
        Active
      </label>
      <label style={{ marginLeft: "10px" }}>
        <input
          type="radio"
          name="filter"
          value="Completed"
          checked={filter === "Completed"}
          onChange={() => setFilter("Completed")}
        />
        Completed
      </label>
    </>
  );
};
