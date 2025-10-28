import Modal from "./components/Modal";
import Task from "./pages/tasks/Task";

const Layout = () => {
  return (
    <div className="flex justify-center items-center bg-background w-full min-h-screen">
      <Modal />
      <Task />
    </div>
  );
};

export default Layout;
