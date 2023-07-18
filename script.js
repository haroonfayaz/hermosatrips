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
    console.log(data);
    firebase.database().ref('Travel_data').push(data);
    alert('Thank you! We will contact you shortly.');
    location.reload();
    return false;
}

function validateEmail(email) {
var re = /\S+@\S+\.\S+/;
return re.test(email);
};