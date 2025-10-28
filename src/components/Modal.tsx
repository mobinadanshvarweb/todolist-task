import type { ModalProps } from "../types/modalType";
import Button from "./Button";

const Modal = ({
  isOpen,
  title,
  children,
  onClose,
  onSubmit,
  submitText = "Submit",
  cancelText = "Cancel",
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="w-full h-screen fixed top-0 left-0 bg-black/50 flex justify-center items-center z-10">
      <div className="w-[90%] lg:w-[70%] max-w-md rounded bg-background flex flex-col gap-4 p-6">
        {title && <h2 className="text-xl font-bold">{title}</h2>}
        <div className="flex-1">{children}</div>
        <div className="flex gap-2 justify-end">
          {onSubmit && (
            <Button
              action={onSubmit}
              style="px-4 py-1 rounded-xl text-white bg-customBlue"
              text={submitText}
            />
          )}
          <Button
            action={onClose}
            style="px-4 py-1 rounded-xl text-white bg-customRed"
            text={cancelText}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
