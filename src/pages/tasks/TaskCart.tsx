import { GrFormEdit } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import Button from "../../components/Button";
import type { TaskProps } from "../../types/taskType";
import { useDispatch } from "react-redux";
import { deleteTask, editTask } from "../../redux/slice/taskSlice";
import { useState } from "react";
import Modal from "../../components/Modal";

const TaskCart = ({ id, title, description, createdAt }: TaskProps) => {
  const dispatch = useDispatch();

  // Delete Modal
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  // Edit Modal
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [taskData, setTaskData] = useState({ title, description });

  const handleDelete = () => {
    dispatch(deleteTask(id));
    setIsDeleteOpen(false);
  };

  const handleEditSubmit = () => {
    dispatch(
      editTask({
        id,
        title: taskData.title,
        description: taskData.description,
        createdAt,
      })
    );
    setIsEditOpen(false);
  };

  return (
    <>
      <div className="w-full rounded bg-background flex flex-col gap-1 p-3 shadow-md hover:shadow-lg transition-all">
        <div className="flex justify-between w-full">
          <h1 className="w-full font-bold text-xl">{title}</h1>
          <div className="flex gap-2 items-center">
            <Button
              title="Edit"
              action={() => {
                setTaskData({ title, description });
                setIsEditOpen(true);
              }}
              icon={<GrFormEdit size={20} color="#A18D6D" />}
            />
            <Button
              title="Delete"
              action={() => setIsDeleteOpen(true)}
              icon={<RiDeleteBin6Line color="#703B3B" />}
            />
          </div>
        </div>
        <p className="w-full text-sm text-justify">{description}</p>
        <div className="w-full flex justify-end text-xs text-customBlue">
          {createdAt}
        </div>
      </div>

      {/* Delete Modal */}
      <Modal
        isOpen={isDeleteOpen}
        title="Are you sure?"
        onClose={() => setIsDeleteOpen(false)}
        onSubmit={handleDelete}
        submitText="Yes, Delete"
        cancelText="No"
      >
        <p>Do you really want to delete this task?</p>
      </Modal>

      {/* Edit Modal */}
      <Modal
        isOpen={isEditOpen}
        title="Edit Task"
        onClose={() => setIsEditOpen(false)}
        onSubmit={handleEditSubmit}
        submitText="Save"
        cancelText="Cancel"
      >
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Title"
            value={taskData.title}
            onChange={(e) =>
              setTaskData({ ...taskData, title: e.target.value })
            }
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
    </>
  );
};

export default TaskCart;
