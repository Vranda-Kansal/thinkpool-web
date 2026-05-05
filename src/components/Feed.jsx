import axios from "axios";
import { useEffect } from "react";
import ProfileCard from "./ProfileCard";
import { useDispatch, useSelector } from "react-redux";
import {
  addFeedProfiles,
  removeUserFromProfile,
} from "../utils/features/feed/feedSlice";
import { addToast } from "../utils/features/toast/toastSlice";

function Feed() {
  const feedProfiles = useSelector((state) => state.feed);
  const dispatch = useDispatch();
  async function getFeed() {
    try {
      const res = await axios.get(
        import.meta.env.VITE_BASE_URL + "/user/feed",
        {
          withCredentials: true,
        },
      );
      dispatch(addFeedProfiles(res?.data?.data));
    } catch (err) {
      if (err.response) {
        dispatch(
          addToast({
            id: crypto.randomUUID(),
            message: err.response.data,
            type: "error",
          }),
        );
        console.log(err.response.data);
      } else {
        dispatch(
          addToast({
            id: crypto.randomUUID(),
            message: err.message || err,
            type: "error",
          }),
        );
        console.log(err.message || err);
      }
    }
  }
  useEffect(() => {
    getFeed();
  }, []);

  const handleSendReq = async (status, toUserId) => {
    try {
      const isValidStatus = ["pass", "like"].includes(status);
      if (!isValidStatus) return;
      if (!toUserId || !toUserId.trim()) {
        console.log(toUserId);
        return;
      }
      const isConnectionReqSend = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/request/send/${status}/${toUserId}`,
        {},
        { withCredentials: true },
      );
      dispatch(removeUserFromProfile(toUserId));
      console.log(isConnectionReqSend?.data?.message);
      dispatch(
        addToast({
          id: crypto.randomUUID(),
          message: isConnectionReqSend?.data?.message,
          type: "success",
        }),
      );
    } catch (err) {
      if (err.response) {
        dispatch(
          addToast({
            id: crypto.randomUUID(),
            message: err.response.data,
            type: "error",
          }),
        );
        console.log(err.response.data.message);
      } else {
        dispatch(
          addToast({
            id: crypto.randomUUID(),
            message: err.message || err,
            type: "error",
          }),
        );
        console.log(err.message || err);
      }
    }
  };

  return (
    <div>
      <div className="w-full max-w-1/2 mx-auto">
        {feedProfiles?.length > 0 ? (
          <>
            {feedProfiles.map((user) => (
              <ProfileCard
                key={user._id}
                profilePic={user?.photoUrl}
                firstName={user?.firstName}
                lastName={user?.lastName}
                role={user?.role}
                linkedIn={user?.linkedIn}
                skills={user?.skills}
                about={user?.about}
                handleSendReq={handleSendReq}
                toUserId={user._id}
              />
            ))}
          </>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-center px-4">
            <h2 className="text-pink-500/80 text-2xl font-semibold tracking-wide">
              You're all caught up!
            </h2>
            <p className="text-white/40 text-sm max-w-xs">
              No new developers to explore right now. Check back later!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
export default Feed;
