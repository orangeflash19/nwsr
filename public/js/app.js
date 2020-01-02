/*jslint devel: true*/
/*global require*/
/*global console*/
/*global document */
/*jslint node: true*/
console.log('its working');
var witness = document.querySelector('#witness');
var Admin = document.querySelector('#Admin');
var witnessForm = document.querySelector('#witnessForm');
var AdminForm = document.querySelector('#AdminForm');
var AdminButtons = document.querySelector('#AdminButtons');
var sendMail = document.querySelector('#sendMail');
var witnessLoader = document.querySelector('#witnessLoader');
var callAdmin = document.querySelector('#callAdmin');
var AdminFormLogin = document.querySelector('#AdminFormLogin');
var witnessFormLogin = document.querySelector('#witnessFormLogin');
var sendCredentials = document.querySelector('#sendCredentials');
var sendCred = document.querySelector('#sendCred');
var startVideoCall = document.querySelector('#startVideoCall');
var videoPage = document.querySelector('#videoPage');
var adminUsername;
var adminPassword;


//initially all div are hiddeen
witnessForm.style.display = 'none';
AdminForm.style.display = 'none';
AdminButtons.style.display = 'none';
sendMail.style.display = 'none';
witnessLoader.style.display = 'none';
callAdmin.style.display = 'none';

//when enter as witness button is pressed button are hidden and witness form is displayed
witness.addEventListener('click', function () {
    witness.style.display = 'none';
    Admin.style.display = 'none';
    witnessForm.style.display = 'block';
});

//when admin login button is pressed buttons are hidden and admin login form is displayed
Admin.addEventListener('click', function () {
    witness.style.display = 'none';
    Admin.style.display = 'none';
    AdminForm.style.display = 'block';
});

//admin form login to allow admin login
function login(adminUsername, adminPassword) {
    adminUsername = document.getElementById('adminUsername').value;
    adminPassword = document.getElementById('adminPassword').value;
    if (adminUsername == 'admin' && adminPassword == 'admin123') {
        alert('admin logged in successfully');
        AdminForm.style.display = 'none';
        AdminButtons.style.display = 'block';
    } else {
        alert('invalid username or password');
    }

}
AdminFormLogin.addEventListener('click', function (ev) {
    //condition to check the admin username and password and allow login
    login();
    ev.preventDefault();
}, false);

//admin can send credentials to the witness email
sendCredentials.addEventListener('click', function (ev) {
    AdminButtons.style.display = 'none';
    sendMail.style.display = 'block';
    ev.preventDefault();
}, false);
var witpass;
generatePassword.addEventListener('click',pass);
   // sendMail.style.display = 'none';
    //videoPage.style.display = 'block';
function pass(){
  var password = generatePass();
  passwordHolder.textContent = password;
  //func1()
  return password;
  //ev.preventDefault();
}
var globalVariable={
  x:password
};
function generatePass() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

backToButtons.addEventListener('click', function (ev) {
     sendMail.style.display = 'none';
     AdminButtons.style.display = 'block';
    //videoPage.style.display = 'block';
    ev.preventDefault();
}, false);




//admin can start the video call
startVideoCall.addEventListener('click', function (ev) {
    AdminButtons.style.display = 'none';
    videoPage.style.display = 'block';
    //var adminOnline = false;
    ev.preventDefault();
}, false);

//witness form login to allow witness to login
function witnesslogin() {
    witnessEmail = document.getElementById('witnessEmail').value;
    witnessPassword = document.getElementById('witnessPassword').value;
    console.log(globalVariable.x);
    if (witnessPassword == globalVariable.x) {
        alert('admin logged in successfully ' + witnessPassword );
        //witnessForm.style.display = 'none';
        //videoPage.style.display = 'block';
    } else {
        alert('invalid credentials ' + witnessPassword);
    }

}
//witness can go to the video call
witnessFormLogin.addEventListener('click', function (ev) {
    //witnessForm.style.display = 'none';
    //witnessLoader.style.display = 'block';
    //videoPage.style.display = 'block';
     witnesslogin();
    ev.preventDefault();
}, false);
