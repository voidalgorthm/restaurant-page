import loadPage from "./modules/page";
import loadHome from "./modules/home";
import loadMenu from "./modules/menu";
import loadContact from "./modules/contact";
import './styles/restaurant.css';

init();

function init() {
  addEvents();
  loadPage;
  loadHome();
};

function addEvents() {
  const tabs = document.querySelectorAll('.tabs');
  tabs.forEach(tab => {
    switch (tab.id) {
      case 'home': tab.addEventListener('click', loadHome); break;
      case 'menu': tab.addEventListener('click', loadMenu); break;
      case 'contact': tab.addEventListener('click', loadContact); break;
    }
  });
};