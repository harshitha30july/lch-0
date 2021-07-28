//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyBjlcS-OlXXsIdLCc8g9JsIlpEa5vUHbCw",
    authDomain: "letschat-web-app-75a7b.firebaseapp.com",
    databaseURL: "https://letschat-web-app-75a7b-default-rtdb.firebaseio.com",
    projectId: "letschat-web-app-75a7b",
    storageBucket: "letschat-web-app-75a7b.appspot.com",
    messagingSenderId: "163208081643",
    appId: "1:163208081643:web:208ae351c12d451aea4eae"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

  function send()
  {
        msg=document.getElementById("msg").value;

        console.log(msg);
        console.log(user_name);
        console.log(room_name);
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0
        });

        document.getElementById("msg").value="";
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();