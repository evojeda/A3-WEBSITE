// Header
function menuShow() {
    const menuList = document.querySelector('.menu-list');
    const menuIcon = document.querySelector('.menu-icon');

    menuList.classList.toggle('active');

    if (menuList.classList.contains('active')) {
        menuIcon.src = "../img/close.svg";
        menuList.style.display = 'flex'; 
        setTimeout(() => {
            menuList.style.opacity = '1';
            menuList.style.transform = 'translateY(0)';
        }, 10); 
    } else {
        menuIcon.src = "../img/bars-solid.svg";
        menuList.style.opacity = '0';
        menuList.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            menuList.style.display = 'none'; 
        }, 500); 
    }
}

// function menuShow() {
//     const menuList = document.querySelector('.menu-list');
//     const menuIcon = document.querySelector('.menu-icon');

//     menuList.classList.toggle('active');

//     if (menuList.classList.contains('active')) {
//         menuIcon.src = "img/close.svg";
//     } else {
//         menuIcon.src = "img/bars-solid.svg";
//     }
// }