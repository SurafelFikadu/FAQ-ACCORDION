const btn_0 = document.querySelector(".btn-0");
const show = document.querySelector(".show");
const iconPlu = document.querySelector(".icon-plu");
const iconMinu = document.querySelector(".icon-minu");

const btn_1 = document.querySelector(".btn-1");
const btn_2 = document.querySelector(".btn-2");
const btn_3 = document.querySelector(".btn-3");

const hide_1 = document.querySelector(".hide-1");
const hide_2 = document.querySelector(".hide-2");
const hide_3 = document.querySelector(".hide-3");

const ip_1 = document.querySelector(".ip1");
const im_1 = document.querySelector(".im1");
const ip_2 = document.querySelector(".ip2");
const im_2 = document.querySelector(".im2");
const ip_3 = document.querySelector(".ip3");
const im_3 = document.querySelector(".im3");

let display = 0;

const hideShowZero = () => {
    if(display == 0) {
        show.style.display = "none";
        iconMinu.style.display = "none";
        iconPlu.style.display = "block";
        display = 1;
    }
    else {
        show.style.display = "block";
        iconMinu.style.display = "block";
        iconPlu.style.display = "none";
        display = 0;
    }
}

const hideShowOne = () => {
    if(display == 0) {
        hide_1.style.display = "block";
        im_1.style.display = "block";
        ip_1.style.display = "none";
        display = 1;
    }
    else {
        hide_1.style.display = "none";
        im_1.style.display = "none";
        ip_1.style.display = "block";
        display = 0;
    }
}

const hideShowTwo = () => {
    if(display == 0) {
        hide_2.style.display = "block";
        im_2.style.display = "block";
        ip_2.style.display = "none";
        display = 1;
    }
    else {
        hide_2.style.display = "none";
        im_2.style.display = "none";
        ip_2.style.display = "block";
        display = 0;
    }
}

const hideShowThree = () => {
    if(display == 0) {
        hide_3.style.display = "block";
        im_3.style.display = "block";
        ip_3.style.display = "none";
        display = 1;
    }
    else {
        hide_3.style.display = "none";
        im_3.style.display = "none";
        ip_3.style.display = "block";
        display = 0;
    }
}

btn_0.addEventListener("click", hideShowZero);
btn_1.addEventListener("click", hideShowOne);
btn_2.addEventListener("click", hideShowTwo);
btn_3.addEventListener("click", hideShowThree);