const FAQ=document.querySelectorAll('.faq');

FAQ.forEach((item,index)=>{
    let header=item.querySelector(".content");
    header.addEventListener("click",()=>{
        item.classList.toggle("open");

        let description=item.querySelector(".description")
        
        if(item.classList.contains("open")){
            description.style.height=`${description.scrollHeight}px`;
        }else{
            description.style.height="0px"
        }
        console.log(description)
    })
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    centeredSlides: false,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

const row=document.querySelector('.row')
const Enquiry=document.querySelector(".enquiry")


Enquiry.addEventListener("click",()=>{
    row.classList.toggle('active')
    console.log(Enquiry)
})


const MenuBar=document.querySelector('#menu-bar')
const Navbar=document.querySelector('.navbar')

MenuBar.addEventListener('click',()=>{
    MenuBar.classList.toggle('fa-times')
    Navbar.classList.toggle('active')
})

window.onscroll=()=>{
    Navbar.classList.remove('active')
    row.classList.remove('active')
}