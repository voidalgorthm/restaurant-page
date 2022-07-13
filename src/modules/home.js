const loadHome = (() => {
  const _createParagraph = (text) => {
    const p = document.createElement('p');
    p.textContent = text;
    // p.classList.add('p-home');
    return p;
  }

  const _createContainer = (element) => {
    const container = document.createElement('div');
    container.classList.add('flex-center');
    container.classList.add('border');
    container.classList.add('container');
    container.appendChild(element);
    return container;
  }

  const main = document.querySelector('main');
  const home = document.createElement('article');
  home.classList.add('home');
  home.classList.add('flex-column');
  const title = document.createElement('h2');
  title.textContent = 'Japanese Dishes to try in Tokyo!';
  const p1 = _createParagraph('Japanese cuisine is world-famous, but there is so much food in Japan to try besides sushi! Of course, many of us also know of sashimi, tempura, and ramen. Yet Japanese food culture is much richer than that.');
  const p2 = _createParagraph('So when visiting the country, what food in Japan should be on your bucket list? To help you decide, we\'ve compiled this list of 32 tasty Japanese foods that everyone needs to try.');

  const div1 = _createContainer(title);
  const div2 = _createContainer(p1);
  const div3 = _createContainer(p2);

  home.appendChild(div1);
  home.appendChild(div2);
  home.appendChild(div3);

  main.appendChild(home);
})();

export default loadHome;