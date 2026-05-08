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
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`px-4 py-2.5 rounded-lg text-sm font-medium shadow-md
        ${
          t.type === "error"
            ? "bg-red-950 border border-red-500/40 text-red-300"
            : "bg-green-950 border border-green-500/40 text-green-300"
        }`}
        >
          {t.message}
        </div>
      ))}
    </div>
  );
}
export default ToastMessage;
