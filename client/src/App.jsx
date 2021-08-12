import "./App.css";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.jwtToken) {
  // Check for token to keep user logged in
  const token = localStorage.getItem("jwtToken"); // Set auth token header auth
  setAuthToken(token);
  const decoded = jwt_decode(token); // Decode token and get user info and exp
  store.dispatch(setCurrentUser(decoded)); // Set user and isAuthenticated
  const currentTime = Date.now() / 1000; // Check for expired token to get in milliseconds
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser()); // Logout user
    window.location.href = "./"; // Redirect to login
  }
}

function App() {
  return (
    <div className="App">
      <h1>Hello Yoni</h1>
    </div>
  );
}

export default App;
