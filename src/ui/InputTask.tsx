import type { ChangeEvent, FC, KeyboardEvent } from "react";

interface IInputTaskProps {
  input: string;
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleCreateTask: (e: KeyboardEvent<HTMLInputElement>) => void;
}

export const InputTask: FC<IInputTaskProps> = ({
  input,
  handleInput,
  handleCreateTask,
}) => {
  return (
    <div className="px-3 flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mr-4 stroke-neutral-400"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
      <input
        className="py-3 text-neutral-400 w-full placeholder:italic text-lg focus:outline-none"
        type="text"
        value={input}
        onChange={handleInput}
        placeholder="What needs to be done?"
        onKeyDown={handleCreateTask}
      />
    </div>
  );
};
