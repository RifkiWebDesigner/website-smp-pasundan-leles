/*==========================================
        SMP PASUNDAN LELES
        OFFICIAL WEBSITE
==========================================*/



/*==========================================
        MOBILE MENU
==========================================*/

const menuToggle = document.querySelector(".menu-toggle");

const navMenu = document.querySelector(".nav-menu");

if(menuToggle){

    menuToggle.addEventListener("click",()=>{

        navMenu.classList.toggle("active");

    });

}



/*==========================================
        CLOSE MENU
==========================================*/

const navLinks=document.querySelectorAll(".nav-menu a");

navLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        navMenu.classList.remove("active");

    });

});



/*==========================================
        STICKY NAVBAR
==========================================*/

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        header.classList.add("sticky");

    }

    else{

        header.classList.remove("sticky");

    }

});

/*==========================================
        ACTIVE MENU
==========================================*/

const currentPage=window.location.pathname.split("/").pop();

const links=document.querySelectorAll(".nav-menu a");

links.forEach(link=>{

    if(link.getAttribute("href")==currentPage){

        link.classList.add("active");

    }

});

/*==========================================
        COUNTER
==========================================*/

const counters=document.querySelectorAll(".stat-card h2");

const speed=150;

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const update=()=>{

const target=+counter.innerText.replace(/\D/g,'');

const current=+counter.getAttribute("data-count")||0;

const increment=Math.ceil(target/speed);

if(current<target){

counter.setAttribute("data-count",current+increment);

counter.innerText=current+increment+"+";

requestAnimationFrame(update);

}

else{

counter.innerText=target+"+";

}

};

update();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

/*==========================================
        SCROLL REVEAL
==========================================*/

const reveal=document.querySelectorAll(

".section-header,.program-card,.facility-card,.teacher-card,.gallery-item,.achievement-card,.news-card,.contact-card,.extra-card"

);

const revealObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("fade-up");

}

});

},

{

threshold:.15

});

reveal.forEach(item=>{

revealObserver.observe(item);

});

/*==========================================
        BACK TO TOP
==========================================*/

const backTop=document.createElement("div");

backTop.innerHTML='<i class="fa-solid fa-chevron-up"></i>';

backTop.className="back-top";

document.body.appendChild(backTop);

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

backTop.classList.add("show");

}

else{

backTop.classList.remove("show");

}

});

backTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/*==========================================
        LOADING
==========================================*/

window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");

if(loader){

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},500);

}

});

/*==========================================
        GALLERY LIGHTBOX
==========================================*/

const gallery=document.querySelectorAll(".gallery-item img,.gallery-card img");

gallery.forEach(image=>{

image.addEventListener("click",()=>{

const overlay=document.createElement("div");

overlay.className="lightbox";

overlay.innerHTML=`

<div class="lightbox-content">

<img src="${image.src}">

<span class="close-lightbox">&times;</span>

</div>

`;

document.body.appendChild(overlay);

overlay.addEventListener("click",()=>{

overlay.remove();

});

});

});

/*==========================================
        NAVBAR SHADOW
==========================================*/

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.style.boxShadow="0 10px 30px rgba(0,0,0,.1)";

}

else{

header.style.boxShadow="none";

}

});

/*==========================================
        SMOOTH ANCHOR
==========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

