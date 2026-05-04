import { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";

export default function ChatPage() {
  const { toUserId } = useParams();
  const location = useLocation();
  console.log(toUserId);
  const name = location.state?.name;
  const photo = location.state?.photo;
  const loggedInUser = useSelector((state) => state.user);
  const userId = loggedInUser?._id;
  const messageRef = useRef(null);
  const socketRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    if (!userId || !toUserId) return;
    const socket = createSocketConnection();
    socketRef.current = socket;
    console.log("socket", socketRef.current, socket);

    socket.emit("joinChat", { userId, toUserId });

    socketRef.current.on(
      "messageReceived",
      ({ senderName, profilePhoto, text, whosendIt, timestamp }) => {
        console.log("recieved message", senderName, text, whosendIt);
        //store it and show to user
        setMessages((prev) => [
          ...prev,
          {
            photoUrl: profilePhoto,
            senderName: senderName,
            text: text,
            whosendIt: whosendIt,
            timestamp: timestamp,
          },
        ]);
      },
    );
    socketRef.current.on("roomStatus", ({ bothOnline }) => {
      setIsOnline(bothOnline);
    });
    return () => {
      socket.disconnect();
    };
  }, [userId, toUserId]);

  const sendMessage = () => {
    if (!userId || !toUserId) return;
    console.log("sendMessage", socketRef.current);
    const newMessage = messageRef.current.value;
    const timestamp = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    socketRef.current.emit("sendMessage", {
      senderName: loggedInUser?.firstName,
      profilePhoto: loggedInUser?.photoUrl,
      userId,
      toUserId,
      text: newMessage,
      timestamp,
    });
    messageRef.current.value = null;
  };
  console.log("messages", messages);

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[#0f0f13]">
      {/* ── HEADER (fixed, no scroll) ── */}
      <div className="flex items-center gap-3 px-4 py-3 bg-[#0d0d12] border-b border-white/5 shrink-0">
        <img
          src={photo}
          alt={name || "Guest"}
          className="w-9 h-9 rounded-full shrink-0 object-cover"
        />
        <div>
          <p className="text-sm font-semibold text-white/90">
            {name || "Guest"}
          </p>
          <p className="flex items-center gap-1.5 text-[11px] text-white/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
            {isOnline ? "Active now" : "Offline"}
          </p>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3">
        {messages?.map((message, index) => {
          return (
            <div key={index}>
              {message?.whosendIt === loggedInUser?._id ? (
                <div className="flex items-end justify-end gap-2">
                  <div className="max-w-[65%] flex flex-col items-end gap-1">
                    <div
                      className="text-white text-sm leading-relaxed px-4 py-2.5 rounded-2xl rounded-br-sm"
                      style={{
                        background: "linear-gradient(135deg, #9c1f75, #5b21b6)",
                      }}
                    >
                      {message?.text}
                    </div>
                    <span className="text-[10px] text-white/20 px-1">
                      {message?.timestamp}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="flex items-end gap-2">
                  <img
                    src={message?.photoUrl || photo}
                    alt={message?.senderName || name}
                    className="w-7 h-7 rounded-full shrink-0 object-cover"
                  />
                  <div className="max-w-[65%] flex flex-col gap-1">
                    <div className="bg-[#1c1c28] text-white/80 text-sm leading-relaxed px-4 py-2.5 rounded-2xl rounded-bl-sm">
                      {message?.text}
                    </div>
                    <span className="text-[10px] text-white/20 px-1">
                      {message?.timestamp}
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {/* ── MESSAGES (only this scrolls) ── */}
      {/* ── INPUT (fixed at bottom, no scroll) ── */}
      <div className="shrink-0 px-4 py-3 bg-[#0d0d12] border-t border-white/5">
        <div className="flex items-end gap-2 bg-[#1c1c28] border border-white/6 rounded-xl px-3 py-2 focus-within:border-violet-500/30 transition-colors">
          <textarea
            ref={messageRef}
            rows={1}
            placeholder="Type a message…"
            className="flex-1 bg-transparent outline-none resize-none text-sm text-white/80 placeholder-white/20 leading-relaxed max-h-28 py-0.5"
          />
          <button
            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 hover:opacity-80 active:scale-95 transition-all"
            style={{ background: "linear-gradient(135deg, #d946a8, #8b5cf6)" }}
            onClick={() => sendMessage(userId, toUserId)}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="white">
              <path d="M1.5 12L13 7 1.5 2v4l8 1-8 1z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
