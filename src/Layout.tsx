import { useSelector } from "react-redux";
import Modal from "./components/Modal";
import Task from "./pages/tasks/Task";
import type { RootState } from "./redux/store";

const Layout = () => {
  const isModalOpen = useSelector((state: RootState) => state.modal.isOpen);
  return (
    <div className="flex justify-center items-center bg-background w-full min-h-screen">
      {isModalOpen && <Modal />}
      <Task />
    </div>
  );
};

export default Layout;
