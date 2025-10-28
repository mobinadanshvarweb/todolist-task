export type ModalProps = {
  isOpen: boolean;
  title?: string;
  children?: React.ReactNode;
  onClose: () => void;
  onSubmit?: () => void;
  submitText?: string;
  cancelText?: string;
};
