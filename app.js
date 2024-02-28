const searchContainer = document.querySelector('.search-container')
const btnSearch = document.querySelector('#search-icon')

const cardContent=document.querySelector('.cart-container') 
const cardBtn = document.querySelector("#cart-icon");

const userBtn=document.querySelector('#user-icon')
const userContent=document.querySelector('.user-container')
const nav=document.querySelector('.navigation')
const linkNav=document.querySelectorAll('.navigation a')
const burgerBtn=document.querySelector('#burger-menu')
const header=document.querySelector('nav')
const sections=document.querySelectorAll('section') 


burgerBtn.addEventListener('click', () => {
nav.classList.toggle('active')
    burgerBtn.classList.toggle('fa-window-close')
    
    cardContent.classList.remove('active')
    searchContainer.classList.remove('active')
    userContent.classList.remove('active')
})


btnSearch.addEventListener('click', () => {
    nav.classList.remove("active");
    burgerBtn.classList.remove("fa-window-close");
 
    searchContainer.classList.toggle('active')
    cardContent.classList.remove('active')
    userContent.classList.remove('active')
})

cardBtn.addEventListener('click', () => {
    nav.classList.remove("active");
burgerBtn.classList.remove("fa-window-close");
 
    cardContent.classList.toggle('active')
    searchContainer.classList.remove('active')
    userContent.classList.remove('active')
})

userBtn.addEventListener('click', () => {
     nav.classList.remove("active");
     burgerBtn.classList.remove("fa-window-close");
 
    userContent.classList.toggle('active')
    cardContent.classList.remove('active')
    searchContainer.classList.remove('active')
})

linkNav.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active')
    burgerBtn.classList.remove("fa-window-close");
        
   }) 
});

window.addEventListener('scroll', () => {
    header.classList.toggle('active', window.scrollY>0)
})

window.addEventListener('scroll', () => {
    nav.classList.remove("active");
    burgerBtn.classList.remove("fa-window-close");

    userContent.classList.remove("active");
    cardContent.classList.remove("active");
    searchContainer.classList.remove("active");
})

const scroollActive = () => {
    sections.forEach(section => {
        let top =window.scrollY
        let height = section.offsetHeight
    let offset=section.offsetTop-150
        let id = section.getAttribute('id')
        
        if (top >= offset && top < offset + height) {
            linkNav.forEach(links => {
                links.classList.remove('active')
                document.querySelector(`.navigation a[href*=${id}]`).classList.add('active')});
        }
    })
}
window.addEventListener('scroll', scroollActive)
    
//     sections.forEach(section => {
//         id=section.getAttribute('id')
//         if (window.scrollY == section.offsetHeight + section.offsetTop) {
//             linkNav.classList.remove('active')
//             linkNav[href='3'+id].classList.add('active')
//         }
//     });
// })
// slider

const items = document.querySelectorAll(".slider_content_item");

const slider = document.querySelector(".slider");
const slider_content = document.querySelector(".slider_content");

let width_slider = slider.offsetWidth;
function previous() {
  // alert(width_slider)

  if (slider_content.scrollLeft == 0) {
    //   alert('a')
    // slider_content.scrollLeft = 0;

    slider_content.scrollLeft = width_slider * items.length;
  } else {
    slider_content.scrollLeft -= width_slider;
  }
}



function next() {
  if (slider_content.scrollLeft > width_slider * items.length-6500  ) {
    // alert('a')
    // slider_content.scrollLeft = 0;

    slider_content.scrollLeft = 0;
    // alert('f')
} else {
      console.log(slider_content.scrollLeft);
      console.log(width_slider*6-3800);
    // console.log(slider_content.scrollLeft);
    slider_content.scrollLeft += width_slider;
  }
}

// setInterval(next,1000)
// slider
// 1h24min48s
// 1h24min48s
// 1h24min48s