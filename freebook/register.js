


const firebaseConfig = {
    apiKey: "AIzaSyABBfnu4eXIiSL8XBDqI3695EwJR4d9lGo",
    authDomain: "registration-55e98.firebaseapp.com",
    projectId: "registration-55e98",
    databaseURL:"https://registration-55e98-default-rtdb.firebaseio.com/",
    storageBucket: "registration-55e98.appspot.com",
    messagingSenderId: "675118641095",
    appId: "1:675118641095:web:da07ca1999b79acb2773e2",
   
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("registration");

 
  
  document.getElementById("registration").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var d =new Date();
    d.setFullYear(2020, 11, 3);
   
    var email = getElementVal("email");
    var d = getElementVal("d");
   
    
    
  
    saveMessages( email,d);
  
    //   enable alert
    document.querySelector(".alert").style.display = "flex";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);

    
    


    window.setTimeout(function(){

      // Move to a new location or you can do something else
      window.location.href ="homePage.html";

  }, 1000);
  
    //   reset the form
    // document.getElementById("registration").reset();
  }
  
  const saveMessages = (email,d) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      
      email: email,
      date: d
      
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };