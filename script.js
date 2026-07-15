window.onload = function () {
    alert("Welcome to my Portfolio!");
    document.getElementById("title").innerText =
        "Welcome! I'm John Paul A. Gluma";
    document.getElementById("title").style.color = "blue";
    document.getElementById("title").style.fontSize = "40px";

 
 
 
    console.log("Portfolio loaded successfully.");
};
function toggleTheme() {
    document.body.classList.toggle("dark-mode");

    console.log("Theme changed.");
}




function showInfo() {
    alert(
        "Personal Information\n\n" +
        "Name: John Paul A. Gluma\n" +
        "Age: 19\n" +
        "Course: BS Information Technology (BSIT-3)\n" +
        "School: Holy Child Central Colleges Inc.\n" +
        "Address: Sitio Aliwanay, Naci, Surallah, South Cotabato\n" +
        "Email: johnpaulaltillero@gmail.com\n" +
        "Phone: 09261157534"
    );
    
    

    console.log("Personal information displayed.");
}
