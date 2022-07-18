import sampleMap from '../assets/map.png'
function importIcons(r) {
  let icons = {};
  r.keys().map((item, index) => { icons[item.replace('../assets/icons/', '')] = r(item); });
  return icons;
}

const icons = importIcons(require.context('../assets/icons/', false, /\.(png|jpe?g|svg)$/));

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
    img.classList.add('map');
    img.alt = `an image of ${source}`;
    img.src = source;
    img.title = `This is a sample screenshot of a part of Google Map. 
    All rights reserve to Google and all parties included in this part of the screenshot. 
    I declined to use the Google Map API for this instance as it only showcases a sample fictional store.`;
    return img;
  }

  const _createIcon = (source) => {
    const icon = document.createElement('img');
    icon.alt = `an icon of ${source}`;
    icon.src = icons[`./${source}`];
    return icon;
  }

  const _createContainer = (...elements) => {
    const container = document.createElement('div');
    container.classList.add('flex-column');
    container.classList.add('padd');
    container.classList.add('container');
    container.classList.add('gap');
    elements.forEach(item => container.appendChild(item));
    return container;
  }

  const _createCard = (...elements) => {
    const card = document.createElement('div');
    card.classList.add('flex-column');
    card.classList.add('padd');
    card.classList.add('card');
    elements.forEach(item => card.appendChild(item));
    return card;
  }

  const _createSection = (...elements) => {
    const section = document.createElement('div');
    section.classList.add('flex-row');
    section.classList.add('padd');
    section.classList.add('section');
    section.classList.add('gap');
    elements.forEach(item => section.appendChild(item));
    return section;
  }

  const contact = document.createElement('article');
  contact.classList.add('flex-column');
  contact.classList.add('gap');

  const title = document.createElement('h2');
  title.textContent = 'Order Now!';
  const p1 = _createParagraph('81-03-3224-9999');
  const p2 = _createParagraph('1-1 Maihama, Urayasu, Chiba 279-0031, Japan', );
  const map = _createImage(sampleMap);

  const div1 = _createSection(_createIcon('noodles.png'),title);
  const div2 = _createSection(_createIcon('phone.png') , p1);
  const address = _createSection(_createIcon('store-marker-coltonwiscombe.png') , p2);
  const div3 = _createCard(map, address);

  contact.appendChild(div1);
  contact.appendChild(div2);
  contact.appendChild(div3);

  main.appendChild(contact);
});

export default loadContact;