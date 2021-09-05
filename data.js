const firebaseConfig = {
  apiKey: "AIzaSyD5nt8QAWDmpgeVBbKto5tIzlTZQKLELTg",
  authDomain: "appfirst-cbe5d.firebaseapp.com",
  projectId: "appfirst-cbe5d",
  storageBucket: "appfirst-cbe5d.appspot.com",
  messagingSenderId: "891793403666",
  appId: "1:891793403666:web:17877bfe236c0a2858cdcb",
  measurementId: "G-MRC2FG6RV6",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
var datab = firebase.database().ref("data");
function UserRegister() {
  var email = document.getElementById("eemail").value;
  var password = document.getElementById("lpassword").value;
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function () {})
    .catch(function (error) {
      var errorcode = error.code;
      var errormsg = error.message;
    });
}
const auth = firebase.auth();
function SignIn() {
  var email = document.getElementById("eemail").value;
  var password = document.getElementById("lpassword").value;
  const promise = auth.signInWithEmailAndPassword(email, password);
  promise.catch((e) => alert(e.msg));
  window.open("https://www.google.com", "_self");
}
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  var userInfo = datab.push();
  userInfo.set({
    name: getId("fname"),
    email: getId("eemail"),
    password: getId("lpassword"),
  });
  alert("Successfully Signed Up");
  console.log("sent");
  document.getElementById("form").reset();
});
function getId(id) {
  return document.getElementById(id).value;
}
