const menuItem = document.getElementById("menuItems");
menuItem.style.maxHeight = "0px";
function menuToggle() {
    if (menuItem.style.maxHeight == "0px") {
        menuItem.style.maxHeight = "200px";
    } else {
        menuItem.style.maxHeight = "0px";
    }
}