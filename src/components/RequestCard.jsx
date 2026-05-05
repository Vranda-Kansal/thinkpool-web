import axios from "axios";
import { removeConnectionRequest } from "../utils/features/feed/connectionSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router";

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
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
      } else {
        console.log(err.message || err);
      }
    }
  };

  return (
    <li className="list-row">
      <div>
        <img
          className="size-10 rounded-box"
          src={
            photoUrl || "https://img.daisyui.com/images/profile/demo/1@94.webp"
          }
        />
      </div>
      <div>
        <div className="text-lg font-semibold text-violet-200">
          {firstName || lastName
            ? `${firstName?.toUpperCase() ?? ""} ${lastName?.toUpperCase() ?? ""}`.trim()
            : "Guest"}
        </div>
        <div className="text-xs uppercase font-bold opacity-60 text-yellow-500">
          {role?.toUpperCase() || "DEVELOPER"}
        </div>
      </div>
      <p className="list-col-wrap text-xs">
        {(about || "No bio Available").slice(0, 150)}
        {about?.length > 150 ? "..." : ""}
      </p>
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
      {cardId ? (
        <>
          <button
            className="btn btn-soft"
            onClick={() => handleRequestStatus("rejected", cardId)}
          >
            Cancel
          </button>
          <button
            className="btn btn-soft btn-secondary"
            onClick={() => handleRequestStatus("accepted", cardId)}
          >
            Accept
          </button>
        </>
      ) : (
        <Link
          to={"/chat/" + user?._id}
          state={{
            name: user?.firstName + " " + user?.lastName,
            photo: user?.photoUrl,
          }}
        >
          <svg
            width="40"
            height="40"
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
    </li>
  );
}
export default RequestCard;
