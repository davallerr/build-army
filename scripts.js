// build army javascript

// global variables
var army = [];

// prototype hero object
var Hero = function(name, element, weapon, familiar, avatar) {
  this.name = name;
  this.element = element;
  this.weapon = weapon;
  this.familiar = familiar;
  this.avatar = avatar;
}

// the reset is always watching
document.getElementById('btn-reset-army').addEventListener('click', resetArmy);
// create hero button
document.getElementById('btn-add-hero').addEventListener('click', createHero);

// new hero creation function
function createHero() {
  console.log('createHero...');

  // expand creation container
  document.getElementById('container-create').className = 'create-collapse';
  document.getElementById('container-create').className = 'create-expand';

  // variables in createHero scope
  var name, element, weapon, familiar, avatar;

  // clear anything for reset hero or next hero
  resetHero();

  // clear any existing options and send to first step: element selection
  function resetHero() {
    // remove event listener for reset hero button, added back in element selection
    document.getElementById('btn-reset-hero').removeEventListener('click', resetHero);

    // clear current options
    name = '';
    element = '';
    weapon = '';
    familiar = '';
    document.getElementById('hero-name').value = '';

    // reset vals-col content
    document.getElementById('val-element').innerHTML = 'Element';
    document.getElementById('val-element').style.opacity = .5;
    document.getElementById('val-weapon').innerHTML = 'Weapon';
    document.getElementById('val-weapon').style.opacity = .5;
    document.getElementById('val-familiar').innerHTML = 'Familiar';
    document.getElementById('val-familiar').style.opacity = .5;

    // send to element selection
    selectElement();
  }

  // choose hero element
  function selectElement() {
    console.log('selectElement...');

    // add event listener for reset hero button
    document.getElementById('btn-reset-hero').addEventListener('click', resetHero);

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
      document.getElementById('val-element').style.opacity = 1;
      selectWeapon();
    }
    // water
    document.getElementById('select-img-2').onclick = function() {
      element = 'water';
      document.getElementById('val-element').innerHTML = element;
      document.getElementById('val-element').style.opacity = 1;
      selectWeapon();
    }
    // earth
    document.getElementById('select-img-3').onclick = function() {
      element = 'earth';
      document.getElementById('val-element').innerHTML = element;
      document.getElementById('val-element').style.opacity = 1;
      selectWeapon();
    }
    // air
    document.getElementById('select-img-4').onclick = function() {
      element = 'air';
      document.getElementById('val-element').innerHTML = element;
      document.getElementById('val-element').style.opacity = 1;
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
      document.getElementById('val-weapon').style.opacity = 1;
      selectFamiliar();
    }
    // axe
    document.getElementById('select-img-2').onclick = function() {
      weapon = 'axe';
      document.getElementById('val-weapon').innerHTML = weapon;
      document.getElementById('val-weapon').style.opacity = 1;
      selectFamiliar();
    }
    // staff
    document.getElementById('select-img-3').onclick = function() {
      weapon = 'staff';
      document.getElementById('val-weapon').innerHTML = weapon;
      document.getElementById('val-weapon').style.opacity = 1;
      selectFamiliar();
    }
    // dagger
    document.getElementById('select-img-4').onclick = function() {
      weapon = 'dagger';
      document.getElementById('val-weapon').innerHTML = weapon;
      document.getElementById('val-weapon').style.opacity = 1;
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

    // set familiar based on image clicked and send to setName
    // wolf
    document.getElementById('select-img-1').onclick = function() {
      familiar = 'wolf';
      document.getElementById('val-familiar').innerHTML = familiar;
      document.getElementById('val-familiar').style.opacity = 1;
      setName();
    }
    // tiger
    document.getElementById('select-img-2').onclick = function() {
      familiar = 'tiger';
      document.getElementById('val-familiar').innerHTML = familiar;
      document.getElementById('val-familiar').style.opacity = 1;
      setName();
    }
    // bear
    document.getElementById('select-img-3').onclick = function() {
      familiar = 'bear';
      document.getElementById('val-familiar').innerHTML = familiar;
      document.getElementById('val-familiar').style.opacity = 1;
      setName();
    }
    // ghost
    document.getElementById('select-img-4').onclick = function() {
      familiar = 'ghost';
      document.getElementById('val-familiar').innerHTML = familiar;
      document.getElementById('val-familiar').style.opacity = 1;
      setName();
    }
  }

  // set hero name
  function setName() {
    console.log('setName...');

    // make name input focus and set placeholder
    document.getElementById('hero-name').focus();
    document.getElementById('hero-name').setAttribute('placeholder', 'name your hero');

    // enable submit button
    document.getElementById('btn-submit').addEventListener('click', addHero);
  }

  // create new unique hero and push to army array
  function addHero() {
    console.log('addHero...');

    // immediately send back to name input if no value
    if(document.getElementById('hero-name').value === '') {
      setName();
    } else {
      // collapse create container
      document.getElementById('container-create').className = 'create-expand';
      document.getElementById('container-create').className = 'create-collapse';

      // if input has value, set input as name
      name = document.getElementById('hero-name').value;

      // set hero avatar as proper result image
      avatar = 'img/results/' + element + '-' + weapon + '-' + familiar + '.jpg';
      console.log('success! your hero: ' + name + ', ' + element + ', ' + weapon + ', ' + familiar + ', ' + avatar);

      // create hero object and add to army array
      var newHero = new Hero(name, element, weapon, familiar, avatar);
      army.push(newHero);
      console.log(army);

      // disable submit button
      document.getElementById('btn-submit').removeEventListener('click', addHero);

      // disable select images
      document.getElementById('select-img-1').onclick = function() {return false;}
      document.getElementById('select-img-2').onclick = function() {return false;}
      document.getElementById('select-img-3').onclick = function() {return false;}
      document.getElementById('select-img-4').onclick = function() {return false;}

      // create new hero number based on army list length
      var armyItems = document.getElementById('army-list').children;
      console.log('armyItems: ' + armyItems);

      // create unique hero id and add to army display in DOM
      var armyItemHTML = '<div class=\'army-item\' id=\'hero-' + (armyItems.length + 1) + '\'><img src=\'img/results/' + element + '-' + weapon + '-' + familiar + '.jpg\'></img><div class=\'army-item-tooltip\' id=\'hero-' + (armyItems.length + 1) + '-tooltip\'><h4>' + name + '</h4><ul class=\'army-item-ul\'><li>' + element + '</li><li>' + weapon + '</li><li>' + familiar + '</li></ul></div></div>';

      document.getElementById('army-list').innerHTML += armyItemHTML;

      // add hovers to each hero item
      for(var i=1; i<(armyItems.length + 1); i++) {
        console.log('i: ' + i);
        iString = i.toString();
        var iHero = 'hero-' + iString;
        var iTooltip = 'hero-' + iString + '-tooltip';
        console.log('iHero: ' + iHero);
        console.log('iTooltip: ' + iTooltip);

        document.getElementById(iHero).addEventListener('mouseover', function() {
          document.getElementById(iTooltip).style.display = 'block';
        });

        document.getElementById(iHero).addEventListener('mouseout', function() {
          document.getElementById(iTooltip).style.display = 'none';
        });
      }
    }
  }
}

// reset entire army
function resetArmy() {

  // confirm reset
  var confirmReset = confirm('Say shoo-shoo to your troop-troops?');

  if(confirmReset) {
    // clear army array and display
    army = [];
    document.getElementById('army-list').innerHTML = '';

    // clear any current hero options// clear current options
    name = '';
    element = '';
    weapon = '';
    familiar = '';
    document.getElementById('hero-name').value = '';

    // reset select header
    document.getElementById('select-head').innerHTML = '';

    // disable select images and set to placeholder
    document.getElementById('select-img-1').onclick = function() {return false;}
    document.getElementById('select-img-2').onclick = function() {return false;}
    document.getElementById('select-img-3').onclick = function() {return false;}
    document.getElementById('select-img-4').onclick = function() {return false;}
    document.getElementById('select-img-1').setAttribute('src', 'img/placeholder.jpg');
    document.getElementById('select-img-2').setAttribute('src', 'img/placeholder.jpg');
    document.getElementById('select-img-3').setAttribute('src', 'img/placeholder.jpg');
    document.getElementById('select-img-4').setAttribute('src', 'img/placeholder.jpg');
    document.getElementById('select-cap-1').innerHTML = '';
    document.getElementById('select-cap-2').innerHTML = '';
    document.getElementById('select-cap-3').innerHTML = '';
    document.getElementById('select-cap-4').innerHTML = '';
    document.getElementById('val-element').innerHTML = '';
    document.getElementById('val-weapon').innerHTML = '';
    document.getElementById('val-familiar').innerHTML = '';
  }
}
