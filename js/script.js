const headerContainer = document.getElementById("header-content");
const headerNavMobileSubmit = document.getElementById("header-nav-mobile-button");
const headerNavMobileList = document.getElementById("header-nav-mobile-list");
const headerBurger = document.getElementById("header-burger");
const headerBurgerMenu = document.getElementById("header-burger__menu");
const headerBurgerImg = document.getElementById("header-burger-img");
const headerBurgerCloseImg = document.getElementById("header-burger__menu-close");
const headerSection = document.getElementsByClassName("section");
let headerNavListCondition = false;
let headerBurgerCondition = false;
let headerContainerWidth = headerContainer.offsetWidth;
let headerBurgerMenuWidth = 0;

headerBurgerImg.onclick = function() {
        BurgerOpen();
        NavMobileClose();
        headerBurgerMenuWidth = headerBurgerMenu.offsetWidth;
        for (let i = 0; i < headerSection.length; i++) {
            headerSection[i].style.margin = "0";
            headerSection[i].style.right = headerBurgerMenuWidth + "px";
        }
        console.log(headerBurgerMenuWidth);
}

headerBurgerCloseImg.onclick = function() {
    BurgerClose();
}

function BurgerOpen() {
    headerBurgerMenu.style.display = "flex";
    headerBurgerCondition = true;
}

function BurgerClose() {
    headerBurgerMenu.style.display = "none";
    headerBurgerCondition = false;
    for (let i = 0; i < headerSection.length; i++) {
        headerSection[i].style.margin = "auto";
        headerSection[i].style.right = 0 + "px";
    }
}

headerNavMobileSubmit.onclick = function() {
    if (headerNavListCondition == false) {
        NavMobileOpen();
        BurgerClose();
    }
    else {
        NavMobileClose()
    }
}

function NavMobileOpen() {
    headerNavMobileList.style.display = "flex";
    headerNavListCondition = true;
}

function NavMobileClose() {
    headerNavMobileList.style.display = "none";
    headerNavListCondition = false;
}

const callWindow = document.getElementById("call-window");
const callButton = document.getElementsByClassName("header-call");
const callWindowCross = document.getElementById("call-window-close");
let callWindowVisible = false;

function CallWindowHide() {
    callWindow.style.display = "none";
    callWindowVisible = false;
}

function CallWindowShow() {
    callWindow.style.display = "block";
    callWindowVisible = true;
}

for(let i = 0; i < callButton.length; i++) {
    callButton[i].onclick = function() {
        if (callWindowVisible == false) {
            CallWindowShow();
            BurgerClose();
        }
        else 
            CallWindowHide();
    }
}

callWindowCross.onclick = function() {
    CallWindowHide();
}


const scrollUp = document.getElementById("scroll-up");
var time;

function Up() {
	var top = window.scrollY;
	if(top > 0) {
		window.scrollBy(0, -10000);
		time = setTimeout('up()', 500);
	} else clearTimeout(time);
	return false;
}

scrollUp.onclick = function() {
    up();
}