document.addEventListener("DOMContentLoaded", function () {
    const profileBtn = document.getElementById("profile-btn");
    const profileMenu = document.getElementById("profile-menu");

    profileBtn.addEventListener("click", function (event) {
        // Toggle the dropdown menu
        profileMenu.style.display = profileMenu.style.display === "block" ? "none" : "block";
        
        // Prevent the event from closing immediately
        event.stopPropagation();
    });

    // Close the dropdown when clicking anywhere else on the page
    document.addEventListener("click", function (event) {
        if (!profileBtn.contains(event.target) && !profileMenu.contains(event.target)) {
            profileMenu.style.display = "none";
        }
    });
});
