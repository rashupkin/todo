import type { FC } from "react";
import type { ITask } from "../types/ITask";

interface ITaskListProps {
  tasks: ITask[];
  filteredTasks: ITask[];
  handleDoneTask: (id: string) => void;
}

export const TaskList: FC<ITaskListProps> = ({
  tasks,
  filteredTasks,
  handleDoneTask,
}) => {
  return (
    <ul className={`${tasks.length && "border-t-gray-300 border-t-1"}`}>
      {filteredTasks.map((task) => (
        <li
          key={task.id}
          className={`flex items-center pl-3 py-3 border-b-1 border-b-gray-200 text-lg ${
            task.isDone ? "text-gray-400" : "text-neutral-700"
          }`}
        >
          <span
            role="checkbox"
            aria-checked={task.isDone}
            className={`checkbox-inner flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-300 rounded-full cursor-pointer ${
              task.isDone && "bg-green-500"
            }`}
            onClick={() => handleDoneTask(task.id)}
          ></span>
          <p className="pl-5 line-through">{task.text}</p>
        </li>
      ))}
    </ul>
  );
};
