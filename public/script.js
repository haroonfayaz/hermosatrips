
const firebaseConfig = {
    apiKey: "AIzaSyCS1kgmQ1bGqo9lDDQ_kYP9cT0-TRQvZBY",
    authDomain: "hermosatravels-fb4d5.firebaseapp.com",
    databaseURL: "https://hermosatravels-fb4d5-default-rtdb.firebaseio.com",
    projectId: "hermosatravels-fb4d5",
    storageBucket: "hermosatravels-fb4d5.appspot.com",
    messagingSenderId: "155763168260",
    appId: "1:155763168260:web:5301d22852e575de81d151",
    measurementId: "G-ZHTCPML50P"
  };
    
  firebase.initializeApp(firebaseConfig);
  

function validateform() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var travelDate = document.getElementById('travel_date').value;
    var city = document.getElementById('city').value;
    var adult = document.getElementById('adult').value;
    var children = document.getElementById('children').value;

    if (name.length < 2) {
        alert("Name must be at least 2 characters long.");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Invalid email address.");
        return false;
    }

    if (contact.length < 10) {
        alert("Phone number must be at least 10 digits long.");
        return false;
    }


    var data = {
            name: name,
            email: email,
            contact: contact,
            travelDate: travelDate,
            city: city,                                                                                                 
            adult: adult,
            children: children
        };
        try {
            firebase.database().ref('Travelers').push(data);
            console.log("Data sent to Firebase:", data);
            console.log(firebase.database().ref('Travelers'));
            alert('Thank you! We will contact you shortly.');
            document.getElementById('myForm').reset();
        } catch (error) {
            console.log("Error sending data to Firebase:", error);
            alert('An error occurred while submitting the form. Please try again.');
        }
    

    return false;
}

function validateEmail(email) {
var re = /\S+@\S+\.\S+/;
return re.test(email);
};


function partnerform() {
    var name = document.getElementById('company-name').value;
    var email = document.getElementById('company-email').value;
    var contact = document.getElementById('pcontact').value;
    var city = document.getElementById('address').value;

    if (name.length < 2) {
        alert("Name must be at least 2 characters long.");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Invalid email address.");
        return false;
    }

    if (contact.length < 10) {
        alert("Phone number must be at least 10 digits long.");
        return false;
    }


    var partdata = {
            name: name,
            email: email,
            contact: contact,
            city: city,                                                                                                 
           
        };
        try {
            firebase.database().ref('partners').push(partdata);
            alert('Thank you! We will contact you shortly.');
            document.getElementById('myForm').reset();
        } catch (error) {
            console.log("Error sending data to Firebase:", error);
            alert('An error occurred while submitting the form. Please try again.');
        }
    

    return false;
}

function validateEmail(email) {
var re = /\S+@\S+\.\S+/;
return re.test(email);
};
