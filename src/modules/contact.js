const loadContact = (() => {
  const main = document.querySelector('main');
  main.replaceChildren();

  const _createParagraph = (text) => {
    const p = document.createElement('p');
    p.textContent = text;
    // p.classList.add('p-contact');
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

  const contact = document.createElement('article');
  contact.classList.add('flex-column');

  const title = document.createElement('h2');
  title.textContent = 'Order Now!';
  const p1 = _createParagraph('81-03-3224-9999');
  const p2 = _createParagraph('1-10-5 Akasaka, Minato, Tokyo 107-8420, Japan');

  const div1 = _createContainer(title);
  const div2 = _createContainer(p1);
  const div3 = _createContainer(p2);

  contact.appendChild(div1);
  contact.appendChild(div2);
  contact.appendChild(div3);

  main.appendChild(contact);
});

export default loadContact;