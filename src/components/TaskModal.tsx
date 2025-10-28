import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Modal from "./Modal";
import { addTask } from "../redux/slice/taskSlice";
import { closeModal } from "../redux/slice/modalSlice";
import type { RootState } from "../redux/store";

const TaskModal = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: RootState) => state.modal.isOpen);
  const [taskData, setTaskData] = useState({ title: "", description: "" });

  const handleSubmit = () => {
    const newTask = {
      ...taskData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    dispatch(addTask(newTask));
    setTaskData({ title: "", description: "" });
    dispatch(closeModal());
  };

  return (
    <Modal
      isOpen={isModalOpen}
      title="Add New Task"
      onClose={() => dispatch(closeModal())}
      onSubmit={handleSubmit}
      submitText="Add Task"
      cancelText="Cancel"
    >
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Title"
          value={taskData.title}
          onChange={(e) => setTaskData({ ...taskData, title: e.target.value })}
          className="w-full border-2 border-customBrown rounded p-2"
        />
        <textarea
          placeholder="Description"
          value={taskData.description}
          onChange={(e) =>
            setTaskData({ ...taskData, description: e.target.value })
          }
          className="flex-1 border-2 border-customBrown rounded p-2"
        />
      </div>
    </Modal>
  );
};

export default TaskModal;
