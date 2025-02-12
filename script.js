
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
function showPopup() {
    document.getElementById("loginModal").style.display = "flex";
    document.querySelector(".wrapper").classList.add("blur-effect");
}

function closePopup() {
    document.getElementById("loginModal").style.display = "none";
    document.querySelector(".wrapper").classList.remove("blur-effect");
}
