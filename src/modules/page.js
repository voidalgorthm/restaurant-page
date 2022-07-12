const loadPage = (() => {
  const _createHeader = (id, txt) => {
    const header = document.createElement('header');
    header.setAttribute('id', id);
    const text = document.createElement('h1');
    text.textContent = txt;
    header.appendChild(text);
    return header;
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
    return main;
  }

  const _createFooter = (id, txt) => {
    const footer = document.createElement('footer');
    footer.setAttribute('id', id);
    const text = document.createElement('h4');
    text.textContent = txt;
    footer.appendChild(text);
    return footer;
  }


  const content = document.getElementById('content');
  const header = _createHeader('header', 'Japanese Dishes');
  content.appendChild(header);
  const nav = _createNav('nav');
  content.appendChild(nav);
  const tabContent = _createMain('tab');
  content.appendChild(tabContent);
  const footer = _createFooter('footer', 'codexeger ©2022');
  content.appendChild(footer);
})();

export default loadPage;