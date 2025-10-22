import { Dispatch, SetStateAction } from "react";

export const TaskFiltering = (props: {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
}) => {
  const { filter, setFilter } = props;

  const options = ["All", "Active", "Completed"];

  return (
    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
      {options.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};
