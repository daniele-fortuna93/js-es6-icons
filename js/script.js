// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
//
// Milestone 2
// Coloriamo le icone per tipo
//
// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

const icons = [
  {
    name: 'apple-alt',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'ice-cream',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'fish',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'lemon',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'hamburger',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'pizza-slice',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'beer',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-whiskey',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'wine-bottle',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'cocktail',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'coffee',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-martini',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'dragon',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'kiwi-bird',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'frog',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'hippo',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'otter',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'horse',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
];

// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.

const iconsContainer = $('.icons');

// Milestone 2
// Coloriamo le icone per tipo

const familyColor =[
  {
    category: 'food',
    color: 'blue'
  },
  {
    category: 'beverage',
    color: 'green'
  },
  {
    category: 'animal',
    color: 'red'
  }
];

const iconsColored = icons.map((element) => {
  familyColor.forEach((item) => {
    const { category, color} = item;
    if ( category == element.category) {
      element.color = color;
    }
  });
  return element;
});
console.log(iconsColored);

iconsColored.forEach((item) => {
  const {name, family, prefix, color} = item;
  const iconHtml = `<div>
    <i class="${family} ${prefix}${name}" style="color:${color};"></i>
    <div class="title">${name}</div>
  </div>`;
  iconsContainer.append(iconHtml);
});

// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

const select = $('#type');
familyColor.forEach((item) => {
  const {category} = item;
  const optionsCategory = (`<option value="${category}">${category}</option>`);
  select.append(optionsCategory);
});


select.change(function(){
  console.log($(this));
});
