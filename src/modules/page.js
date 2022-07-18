function importIcons(r) {
  let icons = {};
  r.keys().map((item, index) => { icons[item.replace('../assets/icons/', '')] = r(item); });
  return icons;
}

const icons = importIcons(require.context('../assets/icons/', false, /\.(png|jpe?g|svg)$/));

const loadPage = (() => {
  const _createContainer = (...elements) => {
    const container = document.createElement('div');
    container.classList.add('flex-center');
    container.classList.add('padd');
    container.classList.add('head');
    elements.forEach(item => container.appendChild(item));
    return container;
  }

  const _createHeader = (id, txt) => {
    const header = document.createElement('header');
    header.setAttribute('id', id);
    const text = document.createElement('h1');
    text.textContent = txt;
    const icon = _createIcon('silverware-fork-knife.png');
    const container = _createContainer(icon, text);
    header.appendChild(container);
    header.classList.add('flex-column');
    return header;
  }

  const _createIcon = (source) => {
    const icon = document.createElement('img');
    icon.alt = `an icon of ${source}`;
    icon.src = icons[`./${source}`];
    return icon;
  }

  const _createBtn = (label) => {
    const btn = document.createElement('button');
    btn.setAttribute('id', label);
    btn.textContent = label.toUpperCase();
    btn.classList.add('tabs');
    return btn;
  }

  const _createNav = (id) => {
    const nav = document.createElement('nav');
    nav.setAttribute('id', id);

    const homeBtn = _createBtn('home');
    const menuBtn = _createBtn('menu');
    const contactBtn = _createBtn('contact');

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);
    return nav;
  }

  const _createMain = (id) => {
    const main = document.createElement('main');
    main.setAttribute('id', id);
    main.classList.add('padd');
    return main;
  }

  const _createFooter = (id, txt) => {
    const footer = document.createElement('footer');
    footer.setAttribute('id', id);
    const text = document.createElement('h5');
    text.textContent = txt;
    footer.appendChild(text);
    footer.classList.add('flex-center');
    return footer;
  }

  const content = document.querySelector('#content');
  const header = _createHeader('header', 'Tsukiji');
  content.appendChild(header);
  const nav = _createNav('nav');
  content.appendChild(nav);
  const tabContent = _createMain('tab');
  content.appendChild(tabContent);
  const footer = _createFooter('footer', 'codexeger ©2022');
  content.appendChild(footer);
})();

export default loadPage;