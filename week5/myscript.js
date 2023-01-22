alert("Do not expect anything on this page");


function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
  }


  let text = "";
  for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text += "The number is " + i + "<br>";
  }
  
  document.getElementById("loop").innerHTML = text;

  document.getElementById("random").innerHTML =
  Math.floor(Math.random() * 10);
