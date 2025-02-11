
// searchInput function
function searchNotes() {
    const searchInput = document.getElementById('search-bar').value.toLowerCase();
    const notes = document.querySelectorAll('.unit');

    notes.forEach(unit => {
        const topic = unit.getAttribute('data-topic').toLowerCase();
        if (topic.includes(searchInput)) {
            unit.classList.remove('hidden');
        } else {
            unit.classList.add('hidden');
        }
    });
} 
// hamburger menu toggle
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
    document.querySelector(".hamburger").classList.toggle("active");
}

// breadcumb
document.addEventListener("DOMContentLoaded", function () {
    const breadcrumbContainer = document.querySelector(".breadcrumb");
    const pathArray = window.location.pathname.split("/").filter(p => p);

    let breadcrumbHTML = `<a href="index.html">Home</a>`;
    let path = "";

    pathArray.forEach((segment, index) => {
        path += `/${segment}`;
        
        // Remove ".html" or any other extension
        let formattedText = segment.replace(/\.[^/.]+$/, ""); 

        // Convert "about-us" to "About Us"
        formattedText = formattedText.replace(/-/g, " ").replace(/\b\w/g, char => char.toUpperCase());

        breadcrumbHTML += ` <span>⟩</span> <a href="${path}">${formattedText}</a>`;
    });

    breadcrumbContainer.innerHTML = breadcrumbHTML;
});


// login 
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

function showPopup() {
    document.getElementById("background").classList.add("blur-bg");
    document.getElementById("loginPopup").style.display = "block";
}

function closePopup() {
    document.getElementById("background").classList.remove("blur-bg");
    document.getElementById("loginPopup").style.display = "none";
}

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Login Successful");
            closePopup();
        })
        .catch((error) => {
            alert(error.message);
        });
}
