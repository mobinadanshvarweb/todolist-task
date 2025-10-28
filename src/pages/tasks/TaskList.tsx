import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import type { TaskProps } from "../../types/taskType";
import TaskCart from "./TaskCart";

const TaskList = () => {
  const tasks = useSelector((state: RootState) => state.tasks.taskList);

  return (
    <div className="w-full flex flex-col gap-3 ">
      {tasks.length === 0 ? (
        <p className="text-center text-customRed text-2xl mt-20 font-bold">
          No Task Added Yet!
        </p>
      ) : (
        tasks.map((item: TaskProps) => (
          <TaskCart
            key={item.id}
            id={item.id}
            title={item.title}
            createdAt={item.createdAt}
            description={item.description}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
