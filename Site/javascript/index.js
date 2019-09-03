document.getElementById('date').innerHTML = new Date().toDateString();

/*function textAppears(){
    document.getElementById('textAppearss').innerHTML = "Test";
}*/

function textAppears() {
    var x = document.getElementById("myDIV");
    if (x.innerHTML === "Hello") {
      x.innerHTML = "Swapped text!";
    } else {
      x.innerHTML = "Hello";
    }
  }
