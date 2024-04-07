/* global google */
import { useEffect } from 'react';
import './App.css';

function App() {
  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: "+ response.credential);  
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
    <div className="App">
      <div id="signInDiv">

      </div>
    </div>
  );
}

export default App;
