// alert("het");
// document.addEventListener('scroll' , () => {
//     const header = document.querySelector('nav');
//     if(window.scrollY > 0) {
//         nav.classList.add('scrolled');
//     } else {
//         nav.classList.remove('scrolled')
//     }
// })
window.addEventListener("scroll",function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky" , window.scrollY > 0);
})