function importIcons(r) {
  let icons = {};
  r.keys().map((item, index) => { icons[item.replace('../assets/icons/', '')] = r(item); });
  return icons;
}

const icons = importIcons(require.context('../assets/icons/', false, /\.(png|jpe?g|svg)$/));

const loadHome = (() => {
  const main = document.querySelector('main');
  main.replaceChildren();

  const _createParagraph = (text) => {
    const p = document.createElement('p');
    p.textContent = text;
    // p.classList.add('p-home');
    return p;
  }

  const _createIcon = (source) => {
    const icon = document.createElement('img');
    icon.alt = `an icon of ${source}`;
    icon.src = icons[`./${source}`];
    return icon;
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

  const _createContainer = (...elements) => {
    const container = document.createElement('div');
    container.classList.add('flex-center');
    container.classList.add('padd');
    container.classList.add('container');
    elements.forEach(item => container.appendChild(item));
    return container;
  }

  const home = document.createElement('article');
  home.classList.add('flex-column');
  const title = document.createElement('h2');
  title.textContent = 'Japanese Dishes You Need To Try in Tokyo!';
  const p1 = _createParagraph('Japanese cuisine is world-famous, but there is so much food in Japan to try besides sushi! Of course, many of us also know of sashimi, tempura, and ramen. Yet Japanese food culture is much richer than that.');
  const p2 = _createParagraph('So when visiting the country, what food in Japan should be on your bucket list? To help you decide, we\'ve compiled this list of tasty Japanese foods that everyone needs to try.');

  const div1 = _createSection(_createIcon('noodles.png'), title);
  const div2 = _createContainer(p1);
  const div3 = _createContainer(p2);

  home.appendChild(div1);
  home.appendChild(div2);
  home.appendChild(div3);

  main.appendChild(home);
});

export default loadHome;