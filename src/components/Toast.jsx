import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { removeToast } from "../utils/features/toast/toastSlice";

function Toast() {
  const toasts = useSelector((state) => state.toasts);
  const dispatch = useDispatch();

  const typeStyles = {
    success:
      "bg-green-500/40 border border-green-500/60 text-green-100 font-medium",
    error: "bg-red-500/40 border border-red-500/60 text-red-100 font-medium",
    info: "bg-yellow-500/40 border border-yellow-500/60 text-yellow-100 font-medium",
  };

  useEffect(() => {
    if (toasts.length === 0) return;
    const timer = setTimeout(() => {
      dispatch(removeToast());
    }, 1000);
    return () => clearTimeout(timer);
  }, [toasts]);

  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-16 right-4 z-50 flex flex-col gap-2">
      {toasts.map((toast, index) => (
        <div
          key={index}
          className={`backdrop-blur-md text-sm px-4 py-3 rounded-xl shadow-lg shadow-black/30 max-w-xs ${typeStyles[toast.type] || typeStyles.info}`}
        >
          {toast.message}
        </div>
      ))}
    </div>
  );
}

export default Toast;
