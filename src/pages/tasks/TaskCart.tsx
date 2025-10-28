import { GrFormEdit } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import Button from "../../components/Button";
import type { TaskProps } from "../../types/taskType";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/slice/taskSlice";
import { useState } from "react";
import Modal from "../../components/Modal";

const TaskCart = ({ id, title, description, createdAt }: TaskProps) => {
  const dispatch = useDispatch();
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const handleDelete = () => {
    dispatch(deleteTask(id));
    setIsDeleteOpen(false);
  };

  return (
    <>
      <div className="w-full rounded bg-background flex flex-col gap-1 p-2">
        <div className="flex justify-between w-full">
          <h1 className="w-full font-bold text-xl">{title}</h1>
          <div className="flex gap-2 items-center">
            <Button
              title="Edit"
              action={() => {}}
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
    </>
  );
};

export default TaskCart;
