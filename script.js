//init
createPressButtonGroup();

//=================================================================================

/**
  * Create press buttons.
  * @param {string} item - the name of the button
  **/
function createPressButtonGroup() {
  //meat
  createPressButtons(0, ["beef", "lamb", "pork"]);
  linebreak = document.createElement("br");
  document.body.appendChild(linebreak);

  //veg
  createPressButtons(1, ["lettuce", "gaiLan", "brocoli"]);
  linebreak = document.createElement("br");
  document.body.appendChild(linebreak);

  //season
  createPressButtons(2, ["salt", "pepper", "soySauce"]);
  linebreak = document.createElement("br");
  document.body.appendChild(linebreak);
}

/**
  * Create press buttons.
  * @param {string} item - the name of the button
  **/
function createPressButtons(id, items) {
  let dev = document.createElement("dev");
  dev.id = id;
  items.forEach(createPressButton, dev);
  document.body.appendChild(dev);
}

/**
  * Create a press button.
  * @param {string} item - the name of the button
  **/
function createPressButton(item) {
  let bt = document.createElement("button");
  bt.id = item;
  bt.type = "button";
  bt.innerHTML = item;
  bt.className = "pressbt";
  bt.onclick = function (event) {
    document.getElementById(event.target.id).innerHTML="hi";
    document.getElementById(event.currentTarget.id).style="background-color:red;";
    console.log("pressed button: " + event.currentTarget.id);
  };
  console.log("create button: " + bt.id);
  console.log(this);
  this.appendChild(bt);
}