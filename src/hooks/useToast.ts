import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type ToastType = 'success' | 'error' | 'info' | 'warning';
type ShowToastProps = {
  message: string;
  type: ToastType;
};

export const useToast = () => {
  const toastMethods = {
    success: toast.success,
    error: toast.error,
    info: toast.info,
    warning: toast.warning,
  };

  const showToast = ({ message, type }: ShowToastProps) => {
    const toastFunction = toastMethods[type];
    if (toastFunction) {
      toastFunction(message, {
        position: 'top-right',
        theme: 'light',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return { showToast };
};
