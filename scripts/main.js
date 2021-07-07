// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  apiKey: "AIzaSyCLHO-qJUvtBL7MC5l_KLgHSrMJZMO6iYE",
  authDomain: "cse134-hw1-ce281.firebaseapp.com",
  projectId: "cse134-hw1-ce281",
  storageBucket: "cse134-hw1-ce281.appspot.com",
  messagingSenderId: "644959746766",
  appId: "1:644959746766:web:d8717d93b955fc05236e9f",
  measurementId: "G-69W5VNVHFJ",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

/* main.js */

// no need to 'use strict' as it is implied in modules
// look up 'use strict' :)

let $ = (selector) => document.querySelector(selector);

function _updateName() {
  const name = $("#name-input").value;
  $("#name-info").innerHTML = `<strong>Author:</strong>  ${name}`;
}

function _updateMajor() {
  const major = $("#major-input").value;
  $("#major-info").innerHTML = `<strong>Major:</strong>  ${major}`;
}

function update() {
  _updateName();
  _updateMajor();
}

export { update };
