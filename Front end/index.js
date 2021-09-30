
function login()  
{
    var userEmail =document.getElementById("email").value;
    var userPass =document.getElementById("password").value;
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          document.getElementById("login").style.display="flex";
          document.getElementById("home").style.display="none";

          var uid = user.uid;
          // ...
        } else {
          // User is signed out
          // ...
          document.getElementById("login").style.display="none";
          document.getElementById("home").style.display="flex";
        }
      });
}
firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("error:"+userMessage);
  });