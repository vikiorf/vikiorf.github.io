document.getElementById('date').innerHTML = new Date().toDateString();



function textAppears() {
    var x = document.getElementById("textAppearss");
    if (x.innerHTML === "Hello") {
      x.innerHTML = "Swapped text!";
    } else {
      x.innerHTML = "Hello";
    }
  }

  /*function textAppears(){
    document.getElementById('textAppearss').innerHTML = "Test";
}*/
