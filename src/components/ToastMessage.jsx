function ToastMessage({ message }) {
  return (
    <div className="toast toast-top toast-end z-20">
      <div className="alert alert-success bg-green-600 text-white text-lg py-1 hover:bg-green-700">
        <span>{message}</span>
        <button className="text-black cursor-pointer hover:font-medium">
          X
        </button>
      </div>
    </div>
  );
}
export default ToastMessage;
