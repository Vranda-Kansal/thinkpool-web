import axios from "axios";
import { useEffect } from "react";
import { getConnectionRequests } from "../utils/features/feed/connectionSlice";
import { useDispatch, useSelector } from "react-redux";
import RequestCard from "./RequestCard";
import { addToast } from "../utils/features/toast/toastSlice";

function ConnectionRequest() {
  const friendRequests = useSelector((state) => state.connectionRequests);
  const dispatch = useDispatch();
  async function getAllRequests() {
    try {
      const allreq = await axios.get(
        import.meta.env.VITE_BASE_URL + "/user/received/requests",
        { withCredentials: true },
      );
      dispatch(getConnectionRequests(allreq?.data?.data));
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        dispatch(
          addToast({
            id: crypto.randomUUID(),
            message: err.response.data,
            type: "error",
          }),
        );
      } else {
        console.log(err.message || err);
        dispatch(
          addToast({
            id: crypto.randomUUID(),
            message: err.message || err,
            type: "error",
          }),
        );
      }
    }
  }
  useEffect(() => {
    getAllRequests();
  }, []);
  if (!friendRequests || friendRequests?.length <= 0)
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-center px-4">
        <h2 className="text-pink-500/80 text-2xl font-semibold tracking-wide">
          No Requests Yet
        </h2>
        <p className="text-white/40 text-sm max-w-xs">
          When someone sends you a connection request, it'll show up here.
        </p>
      </div>
    );
  return (
    <ul className="list m-8 bg-base-100 rounded-box shadow-md">
      {friendRequests?.map((eachReq) => (
        <RequestCard
          key={eachReq._id}
          user={eachReq?.fromUserId}
          cardId={eachReq._id}
        />
      ))}
    </ul>
  );
}
export default ConnectionRequest;
