import loadPage from "./modules/page";
import loadHome from "./modules/home";
import loadMenu from "./modules/menu";
import loadContact from "./modules/contact";
import './styles/restaurant.css';

const addEvents = () => {
  const tabs = document.querySelectorAll('.tabs');
  tabs.forEach(tab => {
    tab.addEventListener('click', (event) => {
      if (event.target.classList.contains('active')) return;

      switch (tab.id) {
        case 'home': loadHome(); changeButtonSelected(tab.id); break;
        case 'menu': loadMenu(); changeButtonSelected(tab.id); break;
        case 'contact': loadContact(); changeButtonSelected(tab.id); break;
      }
    })
  });
};

const changeButtonSelected = (id) => {
  const tabs = document.querySelectorAll('.tabs');
  tabs.forEach(button => {
    if (button.id === id) button.classList.add('active');
    else button.classList.remove('active');
  });
}

init();

function init() {
  addEvents();
  loadPage;
  loadHome();
};