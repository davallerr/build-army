// build army javascript

// global variables
var army = [];

// prototype hero object
var Hero = function(name, element, weapon, familiar) {
  this.name = name;
  this.element = element;
  this.weapon = weapon;
  this.familiar = familiar;
}

// create new unique hero and push to army array
function addHero() {
  var newHero = new Hero(name, element, weapon, familiar);
  army.push(newHero);
}


// new hero creation function
function createHero() {
  console.log('creatHero...');

  // variables in createHero scope
  var name, element, weapon, familiar;

  // reset options variables
  name = '';
  element = '';
  weapon = '';
  familiar = '';

  selectElement();

  // choose hero element
  function selectElement() {
    console.log('selectElement...');

    // populate element options
    document.getElementById('select-head').innerHTML = 'Select Your Element';
    document.getElementById('select-img-1').setAttribute('src', 'img/element-fire.jpg');
    document.getElementById('select-img-2').setAttribute('src', 'img/element-water.jpg');
    document.getElementById('select-img-3').setAttribute('src', 'img/element-earth.jpg');
    document.getElementById('select-img-4').setAttribute('src', 'img/element-air.jpg');
    document.getElementById('select-cap-1').innerHTML = 'fire';
    document.getElementById('select-cap-2').innerHTML = 'water';
    document.getElementById('select-cap-3').innerHTML = 'earth';
    document.getElementById('select-cap-4').innerHTML = 'air';

    // set element based on image clicked and send to selectWeapon
    // fire
    document.getElementById('select-img-1').onclick = function() {
      element = 'fire';
      document.getElementById('val-element').innerHTML = element;
      selectWeapon();
    }
    // water
    document.getElementById('select-img-2').onclick = function() {
      element = 'water';
      document.getElementById('val-element').innerHTML = element;
      selectWeapon();
    }
    // earth
    document.getElementById('select-img-3').onclick = function() {
      element = 'earth';
      document.getElementById('val-element').innerHTML = element;
      selectWeapon();
    }
    // air
    document.getElementById('select-img-4').onclick = function() {
      element = 'air';
      document.getElementById('val-element').innerHTML = element;
      selectWeapon();
    }
  }

  // choose hero weapon
  function selectWeapon() {
    console.log('selectWeapon...');

    // populate weapon options
    document.getElementById('select-head').innerHTML = 'Select Your Weapon';
    document.getElementById('select-img-1').setAttribute('src', 'img/weapon-sword.jpg');
    document.getElementById('select-img-2').setAttribute('src', 'img/weapon-axe.jpg');
    document.getElementById('select-img-3').setAttribute('src', 'img/weapon-staff.jpg');
    document.getElementById('select-img-4').setAttribute('src', 'img/weapon-dagger.jpg');
    document.getElementById('select-cap-1').innerHTML = 'sword';
    document.getElementById('select-cap-2').innerHTML = 'axe';
    document.getElementById('select-cap-3').innerHTML = 'staff';
    document.getElementById('select-cap-4').innerHTML = 'dagger';

    // set weapon based on image clicked and send to selectWeapon
    // sword
    document.getElementById('select-img-1').onclick = function() {
      weapon = 'sword';
      document.getElementById('val-weapon').innerHTML = weapon;
      selectFamiliar();
    }
    // axe
    document.getElementById('select-img-2').onclick = function() {
      weapon = 'axe';
      document.getElementById('val-weapon').innerHTML = weapon;
      selectFamiliar();
    }
    // staff
    document.getElementById('select-img-3').onclick = function() {
      weapon = 'staff';
      document.getElementById('val-weapon').innerHTML = weapon;
      selectFamiliar();
    }
    // dagger
    document.getElementById('select-img-4').onclick = function() {
      weapon = 'dagger';
      document.getElementById('val-weapon').innerHTML = weapon;
      selectFamiliar();
    }
  }

  // choose hero familiar
  function selectFamiliar() {
    console.log('selectFamiliar...');

    // populate familiar options
    document.getElementById('select-head').innerHTML = 'Select Your Familiar';
    document.getElementById('select-img-1').setAttribute('src', 'img/familiar-wolf.jpg');
    document.getElementById('select-img-2').setAttribute('src', 'img/familiar-tiger.jpg');
    document.getElementById('select-img-3').setAttribute('src', 'img/familiar-bear.jpg');
    document.getElementById('select-img-4').setAttribute('src', 'img/familiar-ghost.jpg');
    document.getElementById('select-cap-1').innerHTML = 'wolf';
    document.getElementById('select-cap-2').innerHTML = 'tiger';
    document.getElementById('select-cap-3').innerHTML = 'bear';
    document.getElementById('select-cap-4').innerHTML = 'ghost';

    // set familiar based on image clicked and send to selectWeapon
    // wolf
    document.getElementById('select-img-1').onclick = function() {
      familiar = 'wolf';
      document.getElementById('val-familiar').innerHTML = familiar;
    }
    // tiger
    document.getElementById('select-img-2').onclick = function() {
      familiar = 'tiger';
      document.getElementById('val-familiar').innerHTML = familiar;
    }
    // bear
    document.getElementById('select-img-3').onclick = function() {
      familiar = 'bear';
      document.getElementById('val-familiar').innerHTML = familiar;
    }
    // ghost
    document.getElementById('select-img-4').onclick = function() {
      familiar = 'ghost';
      document.getElementById('val-familiar').innerHTML = familiar;
    }
  }


}




/************************************************
** GARBAGE CAN
************************************************/

/*
// function to add checkStep to each image
function addCheckStep() {
  console.log('addCheckStep...');
  document.getElementById('select-img-1').addEventListener('click', checkStep);
  document.getElementById('select-img-2').addEventListener('click', checkStep);
  document.getElementById('select-img-3').addEventListener('click', checkStep);
  document.getElementById('select-img-4').addEventListener('click', checkStep);
}

// function to check step in hero creation
function checkStep() {
  console.log('checkStep...');
  if(element === '') {
    selectElement();
  } else if(weapon === '') {
    selectWeapon();
  } else if(familiar === '') {
    selectFamiliar();
  } else {
    addResult();
  }
}
*/
