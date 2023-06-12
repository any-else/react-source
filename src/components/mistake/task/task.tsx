import React from "react";

type Props = {};

interface ITask {
  id: string | number;
  name: string;
  completed: boolean;
}

const taskList: Array<ITask> = [
  {
    id: 1,
    name: "Task 1",
    completed: false,
  },
  {
    id: 2,
    name: "Task 2",
    completed: true,
  },
  {
    id: 3,
    name: "Task 3",
    completed: false,
  },
];

const Task = (props: Props) => {
  let index = 0;

  const currentTask = taskList[index];
  const handleClick = () => {
    index = index + 1;
  };
  return (
    <div>
      <h1>Tasks</h1>
      <h2>Current task</h2>
      <h3>{currentTask.name}</h3>
      <button onClick={handleClick}>New Task</button>
    </div>
  );
};

export default Task;
