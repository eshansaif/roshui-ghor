import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";

export default function DashboardHome() {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div className="bg-blue-100 p-8 rounded-md">
      <div className="flex justify-center items-center">
        <img className="btn-circle w-36 h-36 " src={user?.photoURL} alt="" />
      </div>
      <h1>
        Welcome, <span className="font-bold">{user?.displayName}</span>
      </h1>
      <p>Email: {user?.email}</p>
      <p>
        Phone Number: {user?.phoneNumber ? user?.phoneNumber : "Not Available"}
      </p>
      <p>Last Sign in at: {user?.metadata.lastSignInTime}</p>
    </div>
  );
}
