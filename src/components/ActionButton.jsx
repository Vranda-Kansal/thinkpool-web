function ActionButton({
  label,
  bgColor,
  textColor,
  Icon,
  handleSendReq,
  toUserId,
  status,
}) {
  return (
    <div
      className={`flex flex-col gap-2 text-center items-center ${textColor}`}
    >
      <button
        onClick={
          handleSendReq ? () => handleSendReq(status, toUserId) : undefined
        }
        className={`w-14 h-14 rounded-full flex items-center justify-center ${bgColor}`}
      >
        {typeof Icon === "string" ? Icon : <Icon />}
      </button>
      <span className="text-sm mb-4">{label}</span>
    </div>
  );
}

export default ActionButton;
