function changeName() {
    // Get the value from the input field
    var newName = document.getElementById("nameInput").value;

    // Check if the input is not empty
    if (newName.trim() !== "") {
        // Change the text of the profile name
        document.getElementById("profileName").innerText = newName;
    } else {
        alert("Please enter a valid name.");
    }
}
// Restore the saved name from localStorage when the page loads
window.onload = function() {
    var savedName = localStorage.getItem('profileName');
    if (savedName) {
        document.getElementById("profileName").innerText = savedName;
    }
};


function changeemail() {
    // Get the value from the input field
    var newemail = document.getElementById("emailInput").value;

    // Check if the input is not empty
    if (newemail.trim() !== "") {
        // Change the text of the profile name
        document.getElementById("profileemail").innerText = newemail;
    } else {
        alert("Please enter a valid email.");
    }
}



function changeNo() {
    // Get the value from the input field
    var newNo = document.getElementById("noInput").value;

    // Check if the input is not empty
    if (newNo.trim() !== "") {
        // Change the text of the profile name
        document.getElementById("profileNo").innerText = newNo;
    } else {
        alert("Please enter a valid Phone No .");
    }
}