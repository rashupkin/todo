import type { FC } from "react";
import type { ITask } from "../types/ITask";
import type { TFilterTasks } from "../types/TFilterTasks";

interface ITaskFooterProps {
  tasks: ITask[];
  handleClearDoneTasks: () => void;
  handleFilter: (filter: TFilterTasks) => void;
}

export const TaskFooter: FC<ITaskFooterProps> = ({
  tasks,
  handleClearDoneTasks,
  handleFilter,
}) => {
  return (
    <div className="pt-3 px-5 text-neutral-500 text-sm flex items-center justify-between">
      <p>{tasks.filter((task) => !task.isDone).length} items left</p>
      <ul className="flex items-center gap-3">
        <li>
          <button onClick={() => handleFilter("all")}>All</button>
        </li>
        <li>
          <button onClick={() => handleFilter("active")}>Active</button>
        </li>
        <li>
          <button onClick={() => handleFilter("completed")}>Completed</button>
        </li>
      </ul>
      <button onClick={handleClearDoneTasks}>Clear completed</button>
    </div>
  );
};
