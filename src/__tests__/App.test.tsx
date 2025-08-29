import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("adding a new task", () => {
  render(<App />);

  const input = screen.getByPlaceholderText(/What needs to be done\?/i);
  fireEvent.change(input, { target: { value: "create a blog platform" } });
  fireEvent.keyDown(input, { key: "Enter" });

  const task = screen.getByText("create a blog platform");
  expect(task).toBeInTheDocument();
});

test("marks task as done", () => {
  render(<App />);

  const input = screen.getByPlaceholderText(/What needs to be done\?/i);
  fireEvent.change(input, { target: { value: "Task" } });
  fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

  const checkbox = screen.getAllByRole("checkbox")[0];
  fireEvent.click(checkbox);

  const task = screen.getByText("Task");
  expect(task).toHaveClass("line-through");
});
