//init
var index = 0;
createPressButtonGroup();

//=================================================================================

/**
  * Create press buttons.
  * @param {string} item - the name of the button
  **/
function createPressButtonGroup() {
  //meat
  createPressButtons(["beef", "lamb", "pork"]);
  linebreak = document.createElement("br");
  document.body.appendChild(linebreak);

  //veg
  createPressButtons(["lettuce", "gaiLan", "brocoli"]);
  linebreak = document.createElement("br");
  document.body.appendChild(linebreak);

  //season
  createPressButtons(["salt", "pepper", "soySauce"]);
  linebreak = document.createElement("br");
  document.body.appendChild(linebreak);

  createPressButtonSubmit();
}

/**
  * Create press buttons.
  * @param {string} item - the name of the button
  **/
function createPressButtons(items) {
  let dev = document.createElement("dev");
  dev.id = index;
  index +=1;
  for (let i = 0; i < items.length; i++) {
    createPressButton(items[i], dev);
  }
  createPressButtonAdd(dev);
  document.body.appendChild(dev);
}

/**
  * Create a press button.
  * @param {string} name - the name of the button
  **/
 function createPressButton(name, _dev) {
  let bt = document.createElement("button");
  bt.id = index;
  index += 1;
  bt.type = "button";
  bt.innerHTML = name;
  bt.className = "pressbt";
  bt.onclick = function (event) {
    document.getElementById(event.currentTarget.id).style="background-color:red;";
    console.log("pressed button: " + event.currentTarget.id);
  };
  console.log("create button: " + bt.id + "at: " + _dev);
  _dev.appendChild(bt);
}

/**
  * Create a press button add.
  * @param {string} name - the name of the button
  **/
 function createPressButtonAdd(_dev) {
  let bt = document.createElement("button");
  bt.id = index;
  index += 1;
  bt.type = "button";
  bt.innerHTML = "+";
  bt.className = "pressbta";
  bt.onclick = function (event) {
    console.log("pressed button: " + event.currentTarget.id);
    createPressButton(window.prompt("Enter: "), _dev);
  };
  console.log("create button: " + bt.id + "at: " + _dev);
  _dev.appendChild(bt);
}

/**
  * Create a press button submit.
  * @param {string} item - the name of the button
  **/
 function createPressButtonSubmit() {
  let dev = document.createElement("dev");
  dev.id = index;
  index += 1;

  let bt = document.createElement("button");
  bt.id = index;
  index += 1;
  bt.type = "button";
  bt.innerHTML = "submit";
  bt.className = "pressbts";
  bt.onclick = function (event) {
    document.body.innerHTML = "";
    console.log("submit");
    document.write("submited")
  };
  console.log("create button: " + bt.id + "at: " + dev);
  dev.appendChild(bt);

  document.body.appendChild(dev);
}
