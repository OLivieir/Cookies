// import { Cookies } from "./modules/Cookies.js";
// const cookies = new Cookies;

// // cookies.setCookie({
// //     name:'Accept',
// //     value:'yes',
// //     days:2
// // });
// // console.log(cookies.getCookie('Accept'))

// cookies.removeCookie('Accept')
import { InfoCookies } from "./modules/InfoCookies.js";

const infoCookie = new InfoCookies;

const closeLink = document.querySelector(".close a");

closeLink.addEventListener('click', (event) => {

    event.preventDefault();

    infoCookie.setCookie();

});