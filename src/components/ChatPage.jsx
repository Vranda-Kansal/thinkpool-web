import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { createSocketConnection } from "../utils/socket";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addToast } from "../utils/features/toast/toastSlice";

export default function ChatPage() {
  const { toUserId } = useParams();
  const location = useLocation();
  const name = location.state?.name;
  const photo = location.state?.photo;
  const loggedInUser = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const userId = loggedInUser?._id;
  const messageRef = useRef(null);
  const socketRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [isOnline, setIsOnline] = useState(false);
  const bottomRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function getChat() {
    try {
      const res = await axios.get(
        import.meta.env.VITE_BASE_URL + "/getchat/" + toUserId,
        {
          withCredentials: true,
        },
      );
      const conversationArr = res?.data?.data;

      const customizeMsgArr = conversationArr?.map((message) => {
        const { photoUrl, firstName, lastName, _id } = message.senderId;
        const timestamp = new Date(message?.createdAt).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        return {
          photoUrl: photoUrl,
          senderName: `${firstName}${lastName ? " " + lastName : ""}`,
          text: message?.text,
          timestamp: timestamp,
          whosendIt: _id,
          messageId: message?._id,
        };
      });

      setMessages(customizeMsgArr);
    } catch (err) {
      dispatch(
        addToast({
          id: crypto.randomUUID(),
          message: err.message,
          type: "error",
        }),
      );
      console.log(err.message);
    }
  }

  useEffect(() => {
    if (!toUserId) {
      return;
    }
    getChat();
  }, []);

  useEffect(() => {
    if (!userId || !toUserId) return;
    const socket = createSocketConnection();
    socketRef.current = socket;

    socketRef.current.on("connect_error", (err) => {
      console.log(err.message);
      // ya toast/alert show karo
    });

    socket.emit("joinChat", { userId, toUserId });

    socketRef.current.on(
      "messageReceived",
      ({
        firstName,
        lastName,
        profilePhoto,
        text,
        timestamp,
        whosendIt,
        messageId,
      }) => {
        const formattedtimestamp = new Date(timestamp).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        //store it and show to user
        setMessages((prev) => [
          ...prev,
          {
            photoUrl: profilePhoto,
            senderName: `${firstName}${lastName ? " " + lastName : ""}`,
            text: text,
            timestamp: formattedtimestamp,
            whosendIt,
            messageId: messageId,
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
    try {
      if (!userId || !toUserId) return;
      const newMessage = messageRef.current.value;

      if (!newMessage || !newMessage?.trim()) {
        throw new Error("please type some message");
      }

      socketRef.current.emit("sendMessage", {
        userId,
        toUserId,
        newMessage,
      });
      messageRef.current.value = null;
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[#0f0f13]">
      {/* ── HEADER (fixed, no scroll) ── */}
      <div className="flex items-center gap-3 px-4 py-3 bg-[#0d0d12] border-b border-white/5 shrink-0">
        <button
          onClick={() => navigate(-1)}
          className="text-white/40 hover:text-white/80 hover:font-semibold transition-colors shrink-0 cursor-pointer"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
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
      <div className="flex-1 overflow-y-auto scrollbar-hide px-4 py-4 flex flex-col gap-3">
        {messages?.map((message) => {
          return (
            <div key={message.messageId}>
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
        <div ref={bottomRef} />
      </div>
      {/* ── MESSAGES (only this scrolls) ── */}
      {/* ── INPUT (fixed at bottom, no scroll) ── */}
      <div className="shrink-0 px-4 py-3 bg-[#0d0d12] border-t border-white/5">
        <div className="flex items-end gap-2 bg-[#1c1c28] border border-white/6 rounded-xl px-3 py-2 focus-within:border-violet-500/30 transition-colors">
          <textarea
            ref={messageRef}
            rows={1}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
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
