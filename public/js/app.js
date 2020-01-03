/*jslint devel: true*/
/*global require*/
/*global console*/
/*global document */
/*jslint node: true*/
/*global module*/
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
var generatePassword = document.querySelector('#generatePassword');
var passwordHolder = document.querySelector('#passwordHolder');
var backToButtons = document.querySelector('#backToButtons');


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


//admin can send credentials to the witness email
sendCredentials.addEventListener('click', function (ev) {
    AdminButtons.style.display = 'none';
    sendMail.style.display = 'block';
    ev.preventDefault();
}, false);

//generatePassword.addEventListener('click', function () {
//    // sendMail.style.display = 'none';
//    //videoPage.style.display = 'block';
//    newPass();
//    ev.preventDefault();
//}, false);



//back button on send mail form to go back to admin buttons
backToButtons.addEventListener('click', function (ev) {
    sendMail.style.display = 'none';
    AdminButtons.style.display = 'block';
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


    //    if (witnessPassword == witPass) {
    //        alert('admin logged in successfully ' + witnessPassword);
    //        console.log(witPass);
    //        //witnessForm.style.display = 'none';
    //        //videoPage.style.display = 'block';
    //    } else {
    //        alert('invalid credentials ' + witnessPassword + witPass);
    //    }

}


//witnessFormLogin.addEventListener('click', function (ev) {
//    //witnessForm.style.display = 'none';
//    //witnessLoader.style.display = 'block';
//    //videoPage.style.display = 'block';
//
//    //witnesslogin();
//    ev.preventDefault();
//}, false);
