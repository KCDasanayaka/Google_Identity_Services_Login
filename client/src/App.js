/* global google */
import { useEffect, useState } from 'react';
import { jwtDecode } from "jwt-decode";
import './App.css';

function App() {
  const [user, setUser] = useState({});
  
  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);  
    var userObject = jwtDecode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(event){
    setUser({});
    document.getElementById("signInDiv").hidden = true;
  }

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: "38761488151-n5hkia5ll5jb5po67odqt2meolk4n5vs.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large"}
    );
  }, []);

  return (
    <div>
      <h2>React Google Login</h2>
      <br />
      <br />
      <div id="signInDiv"></div>
      {user ? (
        <div>
          <h3>User Logged in</h3>
          <p>Name: {user.name}</p>
          <p>Email Address: {user.email}</p>
          <br />
          <br />
          <button onClick={handleSignOut}>Log out</button>
        </div>
      ) : (
        <p>Please sign in.</p>
      )}
    </div>
  );
}

export default App;
