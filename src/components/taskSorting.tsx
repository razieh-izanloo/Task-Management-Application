import { Dispatch, SetStateAction } from "react";

export const TaskSorting = (props: {
  sort: string;
  setSort: Dispatch<SetStateAction<string>>;
}) => {
  const { sort, setSort } = props;

  const options = [
    { value: "date", title: "Newest to oldest" },
    { value: "priority", title: "Priority (High to Low)" },
  ];
  
  return (
    <select
      style={{ marginLeft: "20px" }}
      value={sort}
      onChange={(e) => setSort(e.target.value as "date" | "priority")}
    >
      {options.map((item) => (
        <option key={item.value} value={item.value}>
          {item.title}
        </option>
      ))}
    </select>
  );
};
