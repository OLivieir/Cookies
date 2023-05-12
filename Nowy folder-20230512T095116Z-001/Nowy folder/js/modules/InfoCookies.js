import {Cookies} from "../modules/Cookies.js";

export class InfoCookies extends Cookies{

    constructor(){
        super();
        this.InfoPlace=document.querySelector('.cookies')
        if(!this.getCookie('Accept')){
            this.showinfo();
        };

    }
    showinfo(){
        this.InfoPlace.classList.add('show');
        this.InfoPlace.classList.remove('hide');
    };
    hideinfo(){
        this.InfoPlace.classList.add('hide');
        this.InfoPlace.classList.remove('show');
    };
    setCookie(){
        super.setCookie({
            name:'Accept',
            value:'yes',
            days:90
        })
        this.hideinfo();
    }

}