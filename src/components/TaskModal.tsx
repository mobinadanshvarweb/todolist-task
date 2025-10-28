import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTask } from "../redux/slice/taskSlice";
import { closeModal } from "../redux/slice/modalSlice";
import type { RootState } from "../redux/store";
import Button from "./Button";

const TaskModal = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: RootState) => state.modal.isOpen);

  const [taskData, setTaskData] = useState({ title: "", description: "" });
  const [errors, setErrors] = useState<{
    title?: string;
    description?: string;
  }>({});
  const handleCancle = () => {
    dispatch(closeModal());
    setErrors({});
  };
  const handleSubmit = () => {
    const newErrors: typeof errors = {};
    if (!taskData.title.trim()) newErrors.title = "Title is required";
    if (!taskData.description.trim())
      newErrors.description = "Description is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const newTask = {
      ...taskData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    dispatch(addTask(newTask));
    setTaskData({ title: "", description: "" });
    setErrors({});
    dispatch(closeModal());
  };

  if (!isModalOpen) return null;

  return (
    <div className="w-full h-screen fixed top-0 left-0 bg-black/50 flex justify-center items-center z-10">
      <div className="w-[70%] min-h-64 rounded bg-background flex flex-col gap-4 p-6">
        <h2 className="text-xl font-bold">Add New Task</h2>
        <div className="flex flex-col gap-4 flex-1">
          <input
            type="text"
            placeholder="Title"
            value={taskData.title}
            onChange={(e) =>
              setTaskData({ ...taskData, title: e.target.value })
            }
            className="w-full border-2 border-customBrown rounded p-2"
          />
          {errors.title && <span className="text-red-500">{errors.title}</span>}

          <textarea
            placeholder="Description"
            value={taskData.description}
            onChange={(e) =>
              setTaskData({ ...taskData, description: e.target.value })
            }
            className="flex-1 border-2 border-customBrown rounded p-2"
          />
          {errors.description && (
            <span className="text-red-500">{errors.description}</span>
          )}
        </div>
        <div className="flex gap-2 justify-end">
          <Button
            action={handleCancle}
            style="px-4 py-1 rounded-xl text-white bg-customRed"
            text="Cancel"
          />
          <Button
            action={handleSubmit}
            style="px-4 py-1 rounded-xl text-white bg-customBlue"
            text="Add Task"
          />
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
