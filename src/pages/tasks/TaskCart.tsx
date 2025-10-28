import { GrFormEdit } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import Button from "../../components/Button";
import type { TaskProps } from "../../types/taskType";

const TaskCart = ({ title, description, createdAt }: TaskProps) => {
  return (
    <div className="w-full rounded bg-background flex flex-col gap-1 p-2">
      <div className="flex justify-between w-full">
        <h1 className="w-full font-bold text-xl">{title}</h1>
        <div className=" flex gap-2 items-center">
          <span className="">
            <Button
              title="Edit"
              action={() => {}}
              icon={<GrFormEdit size={20} color="#A18D6D" />}
            />
          </span>
          <span className="">
            <Button
              title="Delete"
              action={() => {}}
              icon={<RiDeleteBin6Line color="#703B3B" />}
            />
          </span>
        </div>
      </div>
      <p className="w-full text-sm text-justify">{description}</p>
      <div className="w-full flex justify-end text-xs text-customBlue">
        {createdAt}
      </div>
    </div>
  );
};

export default TaskCart;
