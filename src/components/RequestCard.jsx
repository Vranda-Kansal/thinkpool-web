import axios from "axios";
import { removeConnectionRequest } from "../utils/features/feed/connectionSlice";
import { useDispatch } from "react-redux";

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
        {skills?.slice(0, 5).map((skill, index) => (
          <span
            key={index}
            className="badge badge-dash border border-pink-600 text-pink-200"
          >
            {skill}
          </span>
        ))}
      </div>
      {cardId && (
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
      )}
    </li>
  );
}
export default RequestCard;
