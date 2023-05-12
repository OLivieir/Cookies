export class Cookies{
    constructor() {
        console.log('test Cookies')

}
checkCookieEnabled() {
    //console.log(navigator.cookieEnabled);
    if(!navigator.cookieEnabled){
        alert("Masz wyłączoną obsługe ciasteczek");
        return;
    }
}
 setCookie(options){
    //console.log(options)
    const cookieSettingstab = [];

    cookieSettingstab.push(`${options.name}=${options.value}`);

    if(typeof options.days === 'number'){
        const date = new Date();
        //console.log(date)
        date.setTime(date.getTime() + (options.days *24 * 60 * 60 * 1000))
        cookieSettingstab.push(`expires=${date.toGMTString()}`)
    }
    document.cookie= cookieSettingstab.join(';')

    console.log(cookieSettingstab)

}


getCookie(name) {
    if(document.cookie != ''){
        //const cookies =  document.cookie.split(';')
        const cookies =  document.cookie.split(/; */)

        for(let i =0; i < cookies.length; i++){

            const cookiename = cookies[i].split('=')[0];
            const cookieval = cookies[i].split('=')[1];

            if(cookiename === name){
                return cookieval
            }
        }
    }

}

removeCookie(name) {}
}