import Button from "../../components/Button";
import { IoAddOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/slice/modalSlice";
import TaskList from "./TaskList";

const Task = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-full lg:w-1/4 h-96 rounded shadow-2xl bg-[#A18D6D] relative overflow-visible py-4 px-2">
      <div
        className="overflow-y-auto h-full flex flex-col gap-4 p-2  [&::-webkit-scrollbar]:w-1
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-customBlue
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
      >
        <TaskList />
      </div>
      <Button
        title="Add New Task"
        action={() => {
          dispatch(openModal());
        }}
        style="w-12 h-12 flex justify-center items-center text-white absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-customBlue"
        icon={<IoAddOutline size={20} />}
      />
    </div>
  );
};

export default Task;
