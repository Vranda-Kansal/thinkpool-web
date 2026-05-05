import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeToast } from "../utils/features/toast/toastSlice";

function ToastMessage() {
  const toasts = useSelector((state) => state.toast);
  const dispatch = useDispatch();

  useEffect(() => {
    if (toasts.length === 0) return;
    const timer = setTimeout(() => {
      dispatch(removeToast(toasts[0].id));
    }, 2000);
    return () => clearTimeout(timer);
  }, [toasts]);

  return (
    <div className="toast toast-top toast-end z-20">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`alert text-white text-lg py-1 ${
            t.type === "error" ? "bg-red-600" : "bg-green-600"
          }`}
        >
          <span>{t.message}</span>
        </div>
      ))}
    </div>
  );
}
export default ToastMessage;
