import axios from "axios";
import { useEffect, useState } from "react";
import RequestCard from "./RequestCard";
import { useDispatch } from "react-redux";
import { addToast } from "../utils/features/toast/toastSlice";

function FriendsList() {
  const [friendList, setFriendList] = useState([]);
  const dispatch = useDispatch();

  async function getMyFriends() {
    try {
      const friends = await axios.get(
        import.meta.env.VITE_BASE_URL + "/user/connections",
        { withCredentials: true },
      );
      setFriendList(friends?.data?.data);
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
            message: err.response.data,
            type: "error",
          }),
        );
        console.log(err.message || err);
      }
    }
  }

  useEffect(() => {
    getMyFriends();
  }, []);

  if (!friendList || friendList.length <= 0)
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-center px-4">
        <h2 className="text-pink-500/80 text-2xl font-semibold tracking-wide">
          No Connections Yet
        </h2>
        <p className="text-white/40 text-sm max-w-xs">
          Go explore the feed and start connecting with developers!
        </p>
      </div>
    );

  return (
    <ul className="list m-8 bg-base-100 rounded-box shadow-md">
      {friendList?.map((friend) => (
        <RequestCard key={friend._id} user={friend} />
      ))}
    </ul>
  );
}
export default FriendsList;
