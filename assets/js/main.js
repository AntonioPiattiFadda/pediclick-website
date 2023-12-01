/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById('header');
  if (this.scrollY >= 50) {
    header.classList.add('scroll-header');
  }
}
window.addEventListener('scroll', scrollHeader);

/*=============== SWIPER POPULAR ===============*/
var swiperPopular = new Swiper('.popular__container', {
  initialSlide: 1,
  spaceBetween: 32,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

/*=============== POPULAR ACCORDION ===============*/

// Obtén el botón y el menú por sus clases
const propertyButton = document.querySelector('.property-button');
const propertyMenu = document.querySelector('.property-menu');

// Agrega un evento de clic al botón para mostrar/ocultar el menú
propertyButton.addEventListener('click', () => {
  // Cambia el estado de visibilidad del menú
  if (
    propertyMenu.style.display === 'none' ||
    propertyMenu.style.display === ''
  ) {
    propertyMenu.style.display = 'block';
  } else {
    propertyMenu.style.display = 'none';
  }
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id'),
      sectionsClass = document.querySelector(
        '.nav__menu a[href*=' + sectionId + ']'
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link');
    } else {
      sectionsClass.classList.remove('active-link');
    }
  });
};
window.addEventListener('scroll', scrollActive);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll__top');
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add('show-scroll')
    : scrollUp.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollUp);
/*=============== SHOW NAV ===============*/
const showNav = () => {
  const navUp = document.getElementById('nav__menu');
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 100
    ? navUp.classList.add('show-nav')
    : navUp.classList.remove('show-nav');
};
window.addEventListener('scroll', showNav);

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun';

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme
  );
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  //     reset: true
});

sr.reveal(
  '.home__social, .popular__container, .subscribe__container, .footer__container',
  {}
);
sr.reveal('.home__img, .home__orbe', { origin: 'bottom' });
sr.reveal('.contact__container', { origin: 'right' });
sr.reveal('.home__title, .home__subtitle, .home__description, .home__data', {
  delay: 300,
});
sr.reveal('.home__contact-icon', { delay: 400 });
sr.reveal('.logos__img', { interval: 100 });

/*==================== SEND CONTACT INFORMATION ====================*/

const sendButton = document.getElementById('send--button');

const nameInput = document.getElementById('name__input');
const emailInput = document.getElementById('email__input');
const messageInput = document.getElementById('message__input');
const phoneInput = document.getElementById('phone__input');

function validarFormulario() {
  var errorMessage = document.getElementById('error__message');
  let error = 'Por favor rellena los datos faltantes';

  if (nameInput.value === '') {
    errorMessage.innerHTML = error;
    nameInput.focus();
    nameInput.classList.add('error');
    setTimeout(function () {
      errorMessage.innerHTML = '';
      nameInput.classList.remove('error');
    }, 2000);
  }
  if (emailInput.value === '') {
    errorMessage.innerHTML = error;
    emailInput.focus();
    emailInput.classList.add('error');
    setTimeout(function () {
      errorMessage.innerHTML = '';
      emailInput.classList.remove('error');
    }, 2000);
  }
  if (messageInput.value === '') {
    errorMessage.innerHTML = error;
    messageInput.focus();
    messageInput.classList.add('error');
    setTimeout(function () {
      errorMessage.innerHTML = '';
      messageInput.classList.remove('error');
    }, 2000);
    if (
      nameInput.value === '' ||
      emailInput.value === '' ||
      messageInput.value === ''
    ) {
      return;
    }
  }
  return 'OK';
}

function mostrarMensajeEnviado(language) {
  //FIXME - Cambiar nombre del ID
  var modal = document.getElementById('mensajeEnviadoModal');
  modal.innerHTML = '<p>Gracias por tu mensaje!  <span>✔</span></p>';
  modal.style.display = 'block';
  setTimeout(function () {
    modal.style.display = 'none';
  }, 3000);
}

document.getElementById('form').addEventListener('submit', function (event) {
  alert('Estoy en el submit y previne el default del evento');
  event.preventDefault();

  const serviceID = 'default_service';
  const templateID = 'template_jlzyxinSASD';

  form.addEventListener('submit', function (event) {
    event.preventDefault();
  });

  if (sendButtonEn.classList.contains('disabled')) {
    const validator = validarFormulario();
    if (validator !== 'OK') return;
    sendButton.classList.add('cargando');
    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        sendButton.classList.remove('cargando');
        mostrarMensajeEnviado('es');
        emailInput.value = '';
        nameInput.value = '';
        messageInput.value = '';
        phoneInput.value = '';
      },
      (err) => {
        sendButton.classList.remove('cargando');
        alert('Error!');
      }
    );
  }
});
