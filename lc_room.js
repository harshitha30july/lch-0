

// Your web app's Firebase configuration
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

  var user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome "+user_name+"!!";

  function addRoom()
  {
       room_name=document.getElementById("room_name").value; 

       firebase.database().ref("/").child(room_name).update({
             purpose:"adding room"
       });

       localStorage.setItem("room_name",room_name);
       window.location="ich_room.html";
  }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("room name: "+Room_names);
    row="<div class='room_name' id= "+Room_names+" onclick='redirectToRoomname(this.id)'> #"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML += row;
    

    //End code
    });});}
getData();

function redirectToRoomname(name)
{
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="lc_page.html"
}