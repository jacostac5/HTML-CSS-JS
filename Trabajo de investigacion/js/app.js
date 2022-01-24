const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
  menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

const menuLinks = document.querySelectorAll('.menu a[href^="#"]'); //empieza
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
const id = entry.target.getAttribute("id");
const menuLink = document.querySelector(`.menu a[href="#${id}"]`); //igual

if(entry.isIntersecting) {
  document.querySelector(".menu a.selected").classList.remove("selected")
  menuLink.classList.add("selected"); // pone la linea inferior en la seleccion
}
})
}, {rootMargin: "-50% 0px -50% 0px"}) // margen alrededor o interior de ese elemento.

// remover menu en el movil al seleccionar una opcion
menuLinks.forEach(menuLink => {
  menuLink.addEventListener("click", function() {
    menu.classList.remove("menu_opened");
  })

  const hash = menuLink.getAttribute("href"); // seleccionar el elemnto q deseamos aplicar la linea
  const target = document.querySelector(hash); // lo aplica
  if(target) {
    observer.observe(target);
  }

})