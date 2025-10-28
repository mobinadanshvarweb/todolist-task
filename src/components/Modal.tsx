import { useDispatch } from "react-redux";
import Button from "./Button";
import { closeModal } from "../redux/slice/modalSlice";
import { useState } from "react";
import { addTask } from "../redux/slice/taskSlice";

const Modal = () => {
  const dispatch = useDispatch();
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
    <div className="w-full h-screen fixed top-0 left-0 bg-black/50 flex justify-center items-center z-10">
      <div className="w-[70%] h-64 rounded bg-background flex flex-col gap-4 p-6">
        <div className="w-full">
          <input
            value={taskData.title}
            type="text"
            placeholder="Title"
            className="w-full border-2 border-customBrown rounded p-2"
            onChange={(e) => {
              setTaskData({ ...taskData, title: e.target.value });
            }}
          />
        </div>
        <textarea
          value={taskData.description}
          placeholder="Description"
          className="flex-1 border-2  border-customBrown rounded p-2"
          onChange={(e) => {
            setTaskData({ ...taskData, description: e.target.value });
          }}
        ></textarea>
        <div className="flex gap-2 justify-end">
          <Button
            action={handleSubmit}
            style="px-4 py-1 rounded-xl text-white bg-customBlue"
            text="Submit"
          />
          <Button
            action={() => {
              dispatch(closeModal());
            }}
            style="px-4 py-1 rounded-xl text-white bg-customRed"
            text="Cancle"
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
