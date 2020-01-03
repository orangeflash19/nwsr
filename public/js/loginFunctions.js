/*global module*/
/*global require*/
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
var adminUsername;
var adminPassword;
var witnessEmail;
var witnessPassword;
var password;
var witPass;
//var witPass1;


//newPass is invoked when generatePassword button is clicked
function newPass() {
  witPass = password = generatePass();
  passwordHolder.textContent = password;
  console.log(password);
  console.log(witPass);
  return witPass;
}

//function to generate random password
function generatePass() {
  var length = 8,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  //witPass1=retVal;
  return retVal;
}


//admin login function
function adminlogin(adminUsername, adminPassword) {
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


//witness login button click event
function witclick() {
  console.log('witclick invoked');
  witnessEmail = document.getElementById('witnessEmail').value;
  witnessPassword = document.getElementById('witnessPassword').value;


  console.log(witnessPassword);
  console.log(witPass);
}
