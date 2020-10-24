function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  }

var boxIn = document.getElementById("box");
var code = document .getElementsByClassName("code");
boxIn.style.borderRadius = "50% 50% 50% 50% / 50% 50% 50% 50%";
code[0].value = boxIn.style.borderRadius;
var border = ["50", "50", "50", "50", "50", "50", "50", "50"];

function radiusPreviewer(x, input){
  let value = input.value;

  switch(x){
    case 'a':
      boxIn.style.borderTopLeftRadius = value + "% " + border[4] + "%";
      border[0] = value;
      break;
    case 'b':
      boxIn.style.borderTopRightRadius = value + "% " + border[5] + "%";
      border[1] = value;
      break;
    case 'c':
      boxIn.style.borderBottomRightRadius = value + "% " + border[6] + "%";
      border[2] = value;
      break;
    case 'd':
      boxIn.style.borderBottomLeftRadius = value + "% " + border[7] + "%";
      border[3] = value;
      break;
    case 'e':
      boxIn.style.borderTopLeftRadius = border[0] + "% " + value + "%";
      border[4] = value;
      break;
    case 'f':
      boxIn.style.borderTopRightRadius = border[1] + "% " + value + "%";
      border[5] = value;
      break;
    case 'g':
      boxIn.style.borderBottomRightRadius = border[2] + "% " + value + "%";
      border[6] = value;
      break;
    case 'h':
      boxIn.style.borderBottomLeftRadius = border[3] + "% " + value + "%";
      border[7] = value;
      break;
  }

  code[0].value = boxIn.style.borderRadius;
}

