import sampleMap from '../assets/map.png'

const loadContact = (() => {
  const main = document.querySelector('main');
  main.replaceChildren();

  const _createParagraph = (text) => {
    const p = document.createElement('p');
    p.textContent = text;
    // p.classList.add('p-contact');
    return p;
  }

  const _createImage = (source) => {
    const img = document.createElement('img');
    img.alt = `an image of ${source}`;
    img.src = source;
    img.title = `This is a sample screenshot of a part of Google Map. 
    All rights reserve to Google and all parties included in this part of the screenshot. 
    I declined to use the Google Map API for this instance as it only showcases a sample fictional store.`;
    return img;
  }

  const _createContainer = (...elements) => {
    const container = document.createElement('div');
    container.classList.add('flex-center');
    container.classList.add('flex-column');
    container.classList.add('border');
    container.classList.add('container');
    elements.forEach(item => container.appendChild(item));
    return container;
  }

  const _createCard = (...elements) => {
    const card = document.createElement('div');
    card.classList.add('flex-center');
    card.classList.add('flex-column');
    card.classList.add('border');
    card.classList.add('card');
    elements.forEach(item => card.appendChild(item));
    return card;
  }

  const contact = document.createElement('article');
  contact.classList.add('flex-column');

  const title = document.createElement('h2');
  title.textContent = 'Order Now!';
  const p1 = _createParagraph('81-03-3224-9999');
  const p2 = _createParagraph('1-1 Maihama, Urayasu, Chiba 279-0031, Japan', );
  const map = _createImage(sampleMap);

  const div1 = _createContainer(title);
  const div2 = _createContainer(p1);
  const div3 = _createCard(map, p2);

  contact.appendChild(div1);
  contact.appendChild(div2);
  contact.appendChild(div3);

  main.appendChild(contact);
});

export default loadContact;