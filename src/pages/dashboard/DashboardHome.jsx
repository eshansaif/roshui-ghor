import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";

export default function DashboardHome() {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div>
      <img src={user?.photoURL} alt="" />
      <h1>Welcome, {user?.displayName}</h1>
      <p>Email: {user?.email}</p>
      <p>Last Sign in at: {user?.metadata.lastSignInTime}</p>
    </div>
  );
}
