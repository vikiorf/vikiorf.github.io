var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
document.getElementById('date').innerHTML = date;
//document.getElementById('date').innerHTML = new Date().toDateString();



function textAppears() {
    var x = document.getElementById("textAppearss");
    if (x.innerHTML === "") {
      x.innerHTML = "Test";
    } else {
      x.innerHTML = "";
    }
  }

  /*function textAppears(){
    document.getElementById('textAppearss').innerHTML = "Test";
}*/
