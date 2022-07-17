function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('../assets/images', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../assets/images/', false, /\.(png|jpe?g|svg)$/));

class Menu {
  constructor(label, src, desc) {
    this.label = label;
    this.src = src;
    this.desc = desc;
  }
}

const _restaurantMenu = (() => {
  let _menu = [];
  const getMenu = () => _menu;
  const clearMenu = () => _menu = [];
  const createFood = (label, src, desc) => {
    if(_menu.some(item => item.label === label)) return;
    
    const food = new Menu(label, src, desc);
    _menu.push(food);
  }
  return {
    getMenu,
    createFood,
    clearMenu,
  }
})();

const loadMenu = (() => {
  const main = document.querySelector('main');
  main.replaceChildren();

  const _createFrame = (...elements) => {
    const frame = document.createElement('div');
    frame.classList.add('frame');
    frame.classList.add('border-nopadd');
    frame.classList.add('flex-column');
    elements.forEach(item => frame.appendChild(item));
    return frame;
  }

  const _createCard = (element) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('border');
    card.appendChild(element);
    return card;
  }

  const _createHolder = (element) => {
    const holder = document.createElement('div');
    holder.classList.add('card');
    holder.classList.add('border-nopadd');
    holder.appendChild(element);
    return holder;
  }

  const _createLabel = (text) => {
    const heading = document.createElement('h3');
    heading.textContent = text;
    return heading;
  }

  const _createImage = (source) => {
    const img = document.createElement('img');
    img.alt = `an image of ${source}`;
    img.src = images[`./${source}`];
    img.classList.add('food');
    return img;
  }

  const _createParagraph = (text) => {
    const p = document.createElement('p');
    p.textContent = text;
    return p;
  }

  const menu = document.createElement('article');
  menu.classList.add('grid-auto');

  _restaurantMenu.createFood('Buta-No-Shogayaki', 'buta-no-shogayaki.jpg', 'The word yaki means literally “grilled.” This dish is prepared by grilling thin slices of pork dressed with a delicate sauce of mirin, soy sauce, sake (Japanese rice wine), granola oil mixed with sliced onions, and ginger.');
  _restaurantMenu.createFood('Champon', 'champon.jpg', 'Champon is originally from Nagasaki, as it first appeared there in a Chinese restaurant during the Meiji era (1868-1912). However, unlike the many different kinds of ramen, its noodles (specifically made for this dish) are boiled in the soup itself instead of being added later.');
  _restaurantMenu.createFood('Edamame', 'edamame.jpg', 'A popular food in Japan. These are not yet mature soybeans, still in their pods. They can be served hot or cold (at times grilled instead of boiled) and are usually dressed only with salt. Edamame make for an amazing appetizer.');
  _restaurantMenu.createFood('Gyoza', 'gyoza.jpg', 'Gyoza comes in several varieties in Japan. One of the most popular is "yaki-gyoza": the dumplings are prepared with a filling of minced pork meat, cabbage, garlic, onion, and ginger. They are then lightly fried until they become crunchy and of a nice dark-gold color.');
  _restaurantMenu.createFood('Gyudon','gyudon.jpg','A bawl of steamed rice is topped with thinly sliced beef and tender onion, simmered in dashi broth (a popular Japanese ingredient) and seasoned with mirin and soy sauce. Sometimes it’s served topped with a lightly cooked egg.');
  _restaurantMenu.createFood('Kushikatsu','kushikatsu.jpg','This dish, also known as kushiage, is crunchy deep-fried skewered meat, fish, or vegetables. The etymology refers to its preparation, with Kushi referring to the skewers used and katsu, meaning the deep frying of a cutlet of meat.');
  _restaurantMenu.createFood('Oden','oden.jpg','Oden is a tasty, light, hot dish you’d especially enjoy on those cold winter days. This is another variety of one-pot dishes consisting of several ingredients (usually eggs, konjac, fish cakes, and daikon) served in a dashi and soy soup.');
  _restaurantMenu.createFood('Ramen','ramen.jpg','The broth can be based on chicken, pork, beef, fish, vegetables, and flavored with soy sauce, miso, dashi, and many other seasonings. Usually, scallion, seaweed, tofu, and bamboo shoots are added, but it’s impossible to list all the different combinations in which this dish can be served.');
  // _restaurantMenu.createFood('','','');
  
  const menuItems = _restaurantMenu.getMenu();
  console.log(_restaurantMenu.getMenu());
  menuItems.forEach(item => {
    let title, visual, desc;
    Object.entries(item).forEach(([key, value]) => {
      switch (key) {
        case 'label': title = _createCard(_createLabel(value)); break;
        case 'src': visual = _createHolder(_createImage(value)); break;
        case 'desc': desc = _createCard(_createParagraph(value)); break;
      }
    });
    menu.appendChild(_createFrame(title, visual, desc));
  });
  main.appendChild(menu);
});

export default loadMenu;