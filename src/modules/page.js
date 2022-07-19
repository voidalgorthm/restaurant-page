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
    elements.forEach(item => container.appendChild(item));
    return container;
  }

  const _createContent = (...content) => {
    const container = document.createElement('div');
    console.log(content);
    content.forEach(item => container.append(item));
    container.classList.add('flex-center');
    container.classList.add('padd');
    container.classList.add('gap');
    return container;
  }

  const _createLink = (lnk, text) => {
    const link = document.createElement('a');
    link.href = lnk;
    const txt = document.createTextNode(text);
    link.appendChild(txt);
    return link;
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

  const _createHeader = (id, txt) => {
    const header = document.createElement('header');
    header.setAttribute('id', id);
    const text = document.createElement('h1');
    text.textContent = txt;
    const icon = _createIcon('silverware-fork-knife.png');
    const container = _createContainer(icon, text);
    container.classList.add('head');
    header.appendChild(container);
    header.classList.add('flex-column');
    return header;
  }

  const _createNav = (id) => {
    const nav = document.createElement('nav');
    nav.setAttribute('id', id);

    const homeBtn = _createBtn('home');
    const menuBtn = _createBtn('menu');
    const contactBtn = _createBtn('contact');

    homeBtn.classList.add('active');

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

  const _createFooter = (...elements) => {
    const footer = document.createElement('footer');
    footer.setAttribute('id', 'footer');
    footer.classList.add('flex-row');
    elements.forEach(item => footer.appendChild(item))
    return footer;
  }

  const content = document.querySelector('#content');
  const header = _createHeader('header', 'Tsukiji');
  content.appendChild(header);
  const nav = _createNav('nav');
  content.appendChild(nav);
  const tabContent = _createMain('tab');
  content.appendChild(tabContent);
  const creds1 = _createContent(`Icons on`, _createLink('https://materialdesignicons.com/', 'Material Design Icons'));
  const creds2 = _createContent('Content by', _createLink('https://livejapan.com/en/in-tokyo/in-pref-tokyo/in-tsukiji/article-a0002670/','Lucio Maurizi on Live Japan'));
  const creds3 = _createContent('Photo by', _createLink('https://unsplash.com/@yoavaziz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText', 'Yoav Aziz'), 'on', _createLink('https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText', 'Unsplash'));
  const creds4 = _createContent('codexeger ©2022');
  const footer = _createFooter(creds1, creds2, creds3, creds4);
  content.appendChild(footer);
})();

export default loadPage;