import loadPage from "./modules/page";
import loadHome from "./modules/home";
import './styles/restaurant.css';

init();

function addEvents() {
  const homeBtn = document.querySelector('#home');
  const menuBtn = document.querySelector('#menu');
  const contactBtn = document.querySelector('#contact');

  homeBtn.addEventListener('click', loadHome);
};

function init() {
  addEvents();
  loadPage;
  loadHome;
};