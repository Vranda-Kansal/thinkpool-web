import axios from "axios";
import { removeConnectionRequest } from "../utils/features/feed/connectionSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { addToast } from "../utils/features/toast/toastSlice";

function RequestCard({ user, cardId }) {
  const dispatch = useDispatch();
  const { firstName, lastName, role, about, skills, photoUrl } = user;

  const handleRequestStatus = async (status, connectionId) => {
    try {
      if (!connectionId) {
        console.log("whose req you want to accept is not there", connectionId);
        return;
      }
      const removedConnection = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/request/review/${status}/${connectionId}`,
        {},
        { withCredentials: true },
      );
      dispatch(removeConnectionRequest(removedConnection?.data?.data?._id));
      dispatch(
        addToast({
          id: crypto.randomUUID(),
          message: removedConnection?.data.message,
          type: "success",
        }),
      );
    } catch (err) {
      if (err.response) {
        dispatch(
          addToast({
            id: crypto.randomUUID(),
            message: err.response,
            type: "error",
          }),
        );
        console.log(err.response.data);
      } else {
        dispatch(
          addToast({
            id: crypto.randomUUID(),
            message: err.message,
            type: "error",
          }),
        );
        console.log(err.message || err);
      }
    }
  };

  return (
    <li className="flex flex-col gap-3 p-4 bg-base-200 rounded-box mb-3">
      {/* Row 1: Avatar + Name/Role + Action */}
      <div className="flex items-center gap-3">
        <img
          className="size-12 rounded-box shrink-0"
          src={
            photoUrl || "https://img.daisyui.com/images/profile/demo/1@94.webp"
          }
        />
        <div className="flex-1 min-w-0">
          <div className="text-base font-semibold text-violet-200 truncate">
            {firstName || lastName
              ? `${firstName?.toUpperCase() ?? ""} ${lastName?.toUpperCase() ?? ""}`.trim()
              : "Guest"}
          </div>
          <div className="text-xs uppercase font-bold opacity-60 text-yellow-500">
            {role?.toUpperCase() || "DEVELOPER"}
          </div>
        </div>

        {/* Action — chat icon or buttons */}
        {cardId ? (
          <div className="flex gap-2 shrink-0">
            <button
              className="btn btn-soft btn-sm  md:btn-md"
              onClick={() => handleRequestStatus("rejected", cardId)}
            >
              Cancel
            </button>
            <button
              className="btn btn-soft btn-secondary btn-sm  md:btn-md"
              onClick={() => handleRequestStatus("accepted", cardId)}
            >
              Accept
            </button>
          </div>
        ) : (
          <Link
            to={"/chat/" + user?._id}
            state={{
              name: user?.firstName + " " + user?.lastName,
              photo: user?.photoUrl,
            }}
            className="shrink-0"
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 3C6.48 3 2 6.94 2 11.5c0 2.21 1.16 4.21 3.06 5.7L4 21l4.11-2.06c1.17.32 2.42.49 3.89.49 5.52 0 10-3.94 10-8.5S17.52 3 12 3z"
                fill="#ec4899"
              />
              <circle cx="9" cy="11.5" r="1.2" fill="white" />
              <circle cx="12" cy="11.5" r="1.2" fill="white" />
              <circle cx="15" cy="11.5" r="1.2" fill="white" />
            </svg>
          </Link>
        )}
      </div>

      {/* Row 2: Bio */}
      <p className="text-xs text-base-content/70 leading-relaxed">
        {(about || "No bio Available").slice(0, 150)}
        {about?.length > 150 ? "..." : ""}
      </p>

      {/* Row 3: Skills */}
      <div className="flex flex-wrap gap-1">
        {skills?.slice(0, 5).map((skill) => (
          <span
            key={skill._id}
            className="badge badge-dash border border-pink-600 text-pink-200"
          >
            {skill?.name}
          </span>
        ))}
      </div>
    </li>
  );
}
export default RequestCard;
