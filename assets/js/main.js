/* MENU SHOW */ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

/*----- ANIMATE -----*/
// OVERLAY
gsap.to(".first", 1.5, {delay: .5, top: "-100%", ease: Expo.easeInOut});
gsap.to(".second", 1.5, {delay: .7, top: "-100%", ease: Expo.easeInOut});
gsap.to(".third", 1.5, {delay: .9, top: "-100%", ease: Expo.easeInOut});

// IMG
gsap.from('.home__img', {opacity: 0, duration: 2, delay: 2, x: 60})
gsap.from('.initiatives-image', {opacity: 0, duration: 2, delay: 2, x: 60})

// INFORMATION
gsap.from('.home__information', {opacity: 0, duration: 3, delay: 2.3, y: 25})
gsap.from('.anime-text', {opacity: 0, duration: 3, delay: 2.3, y: 25, ease:'expo.out', stagger: .3})

// NAV ITEM
gsap.from('.nav__logo', {opacity:0, duration: 3, delay: 3.2, y: 25, ease:'expo.out'});
gsap.from('.nav__item', {opacity: 0, duration: 3, delay: 3.2, y: 25, ease:'expo.out', stagger: .2})

// SOCIAL
gsap.from('.home__social-icon', {opacity: 0, duration: 3, delay: 4, y: 25, ease:'expo.out', stagger: .2})

   
      document.querySelectorAll('.card').forEach(function (card) {
        card.addEventListener('click', function () {
          // Toggle the 'active' class to reveal or hide the card content
          this.classList.toggle('active');
          
          // Add a fade-in animation using GSAP
          gsap.fromTo(this.querySelector('.card-content'), { opacity: 0 }, { opacity: 1, duration: 0.5 });
        });
      });

    
     
        // Add click event listeners to each card
        document.querySelectorAll('.card').forEach(function (card) {
          card.addEventListener('click', function () {
            // Toggle the 'active' class to reveal or hide the card content
            this.classList.toggle('active');
          });
        });

//Email
/=============== EMAIL JS ===============/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    //serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_eurxwmz','template_bufyu58','#contact-form','hAKHuyLapaYMv-kEo')
    .then(() => {
        // Show sent message
        contactMessage.textContent='Message sent successfully ✅'

        // Remove message after five seconds
        setTimeout(() => {
        contactMessage.textContent = ''
    }, 5000)

    // Clear input fields
    contactForm.reset()

    }, () =>{
        // Show error message
        contactMessage.textContent = 'Message not sent (service error) ❌'
    })
}

contactForm.addEventListener('submit',sendEmail)

document.addEventListener("DOMContentLoaded", function() {
  const slider = document.querySelector(".slider");
  let currentIndex = 0;

  function nextSlide() {
    currentIndex = (currentIndex + 1) % document.querySelectorAll(".slide").length;
    updateSlider();
  }

  function updateSlider() {
    const translateValue = -currentIndex * 100 + "%";
    slider.style.transform = "translateX(" + translateValue + ")";
  }

  // Change slide every 3 seconds (adjust as needed)
  setInterval(nextSlide, 3000);
});
