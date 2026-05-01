import axios from "axios";
import { useEffect } from "react";
import { getConnectionRequests } from "../utils/features/feed/connectionSlice";
import { useDispatch, useSelector } from "react-redux";
import RequestCard from "./RequestCard";

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
      } else {
        console.log(err.message || err);
      }
    }
  }
  useEffect(() => {
    getAllRequests();
  }, []);
  if (!friendRequests || friendRequests?.length <= 0)
    return <div>No Connection Request yet!</div>;
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
