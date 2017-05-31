// build army javascript


var army = [];

// prototype hero object
var Hero = function(element, weapon, familiar) {
  this.element = element;
  this.weapon = weapon;
  this.familiar = familiar;
  this.name = name;
}

// create new unique hero and push to army array
function addHero() {
  var newHero = new Hero(element, weapon, familiar, name);
  army.push(newHero);
}


// new hero creation function
function createHero() {

  // variables for hero creation
  var element, weapon, familiar, name;

  // reset variables
  element = '';
  weapon = '';
  familiar = '';
  name = '';

  document.getElementById('select-head').innerHTML = 'Select Your Element';
  document.getElementById('select-1-img').setAttribute('src', 'img/element-fire.jpg');
  document.getElementById('select-2-img').setAttribute('src', 'img/element-water.jpg');
  document.getElementById('select-3-img').setAttribute('src', 'img/element-earth.jpg');
  document.getElementById('select-4-img').setAttribute('src', 'img/element-air.jpg');
  document.getElementById('select-1-cap').innerHTML = 'fire';
  document.getElementById('select-1-cap').innerHTML = 'water';
  document.getElementById('select-1-cap').innerHTML = 'earth';
  document.getElementById('select-1-cap').innerHTML = 'air'; 

  // choose hero element
  function selectElement() {
    // populate options

  }


}
