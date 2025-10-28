import { useDispatch } from "react-redux";
import Button from "./Button";
import { closeModal } from "../redux/slice/modalSlice";

const Popup = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-full h-screen fixed top-0 left-0 bg-black/50 flex justify-center items-center z-10">
      <div className="w-[50%] h-52 rounded bg-background flex flex-col gap-4 p-6">
        Are you sure you waant to Delete this task?
      </div>
      <div className="flex gap-2 justify-end">
        <Button
          action={handleDelete}
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
  );
};

export default Popup;
