import axios from "axios";
import { useEffect } from "react";
import ProfileCard from "./ProfileCard";
import { useDispatch, useSelector } from "react-redux";
import {
  addFeedProfiles,
  removeUserFromProfile,
} from "../utils/features/feed/feedSlice";

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
        console.log(err.response.data);
      } else {
        console.log(err.message || err);
      }
    }
  }
  useEffect(() => {
    getFeed();
  }, []);
  console.log(feedProfiles);

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
    } catch (err) {
      if (err.response) {
        console.log(err.response.data.message);
      } else {
        console.log(err.message || err);
      }
    }
  };

  return (
    <div>
      {/* dim overlay */}
      {/* <div className="absolute inset-0 bg-[url(/assests/feedbg.jpg)] bg-cover bg-center opacity-30 -z-10" /> */}
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
          <div>all users already in friends! Later explore more</div>
        )}
      </div>
    </div>
  );
}
export default Feed;
