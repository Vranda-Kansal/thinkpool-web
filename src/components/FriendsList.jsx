import axios from "axios";
import { useEffect, useState } from "react";
import RequestCard from "./RequestCard";

function FriendsList() {
  const [friendList, setFriendList] = useState([]);

  async function getMyFriends() {
    try {
      const friends = await axios.get(
        import.meta.env.VITE_BASE_URL + "/user/connections",
        { withCredentials: true },
      );
      setFriendList(friends?.data?.data);
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
      } else {
        console.log(err.message || err);
      }
    }
  }

  useEffect(() => {
    getMyFriends();
  }, []);

  if (!friendList || friendList.length <= 0)
    return <div>No Connections yet. Explore Feed</div>;

  return (
    <ul className="list m-8 bg-base-100 rounded-box shadow-md">
      {friendList?.map((friend) => (
        <RequestCard key={friend._id} user={friend} />
      ))}
    </ul>
  );
}
export default FriendsList;
