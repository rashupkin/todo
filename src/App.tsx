import { useState, type ChangeEvent, type KeyboardEvent } from "react";
import type { ITask } from "./types/ITask";
import { generateId } from "./utils/generateId";
import type { TFilterTasks } from "./types/TFilterTasks";
import { TaskList } from "./ui/TaskList";
import { TaskFooter } from "./ui/TaskFooter";
import { InputTask } from "./ui/InputTask";
import { useLocalStorage } from "./hooks/useLocalStorage";

export default function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useLocalStorage<ITask[]>("tasks", []);
  const [filterTasks, setFilterTasks] = useState<TFilterTasks>("all");

  const filteredTasks = tasks.filter((task) => {
    if (filterTasks === "all") return true;
    if (filterTasks === "active") return !task.isDone;
    if (filterTasks === "completed") return task.isDone;

    return true;
  });

  const handleInput = (e: ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

  const handleCreateTask = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter" || !input.length) return;

    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: generateId(),
        text: input,
        isDone: false,
      },
    ]);
    setInput("");
  };

  const handleClearDoneTasks = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.isDone));
  };

  const handleDoneTask = (id: string) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      );
    });
  };

  const handleFilter = (filter: TFilterTasks) => {
    setFilterTasks(filter);
  };

  return (
    <div className="w-screen min-h-screen flex items-center justify-center flex-col">
      <h1 className="text-red-200 text-8xl text-center font-thin mb-5">
        todos
      </h1>
      <div className="bg-white rounded-xs max-w-lg w-full py-3 shadow-md">
        <InputTask
          input={input}
          handleInput={handleInput}
          handleCreateTask={handleCreateTask}
        />
        <TaskList
          tasks={tasks}
          filteredTasks={filteredTasks}
          handleDoneTask={handleDoneTask}
        />
        <TaskFooter
          tasks={tasks}
          handleFilter={handleFilter}
          handleClearDoneTasks={handleClearDoneTasks}
        />
      </div>
    </div>
  );
}
