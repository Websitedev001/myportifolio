function toggleMenu() {
    const mobileMenu = document.getElementById("home-page-mobile");
    if (mobileMenu.style.display === "none" || !mobileMenu.style.display) {
        mobileMenu.style.display = "block";
    } else {
        mobileMenu.style.display = "none";
    }
}
