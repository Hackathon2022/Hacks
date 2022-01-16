/**
  * Create a press button.
  * @param {string} item - the name of the button
  */
function createPressButton(item) {
  var bt = document.createElement('button');
  bt.id = item;
  bt.innerHTML = item;
  bt.onclick = function (event) {
    document.getElementById(event.target.id).innerHTML="hi";
    document.getElementById(event.currentTarget.id).style="background-color:pink;";
    console.log("create button: " + event.currentTarget.id);
  };
  dev.appendChild(bt);
}


//generate buttons
const dev = document.createElement('dev');

const fruits = ["apple", "orange", "cherry"];
fruits.forEach(createPressButton);

document.body.appendChild(dev);