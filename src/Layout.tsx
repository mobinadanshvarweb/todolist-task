import Task from "./pages/tasks/Task";
import TaskModal from "./components/TaskModal";

const Layout = () => {
  return (
    <div className="flex justify-center items-center bg-background w-full min-h-screen">
      <TaskModal />
      <Task />
    </div>
  );
};

export default Layout;
