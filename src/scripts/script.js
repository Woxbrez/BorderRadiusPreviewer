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
code[0].value = "50% 50% 50% 50% / ";
boxIn.style.borderTopLeftRadius = "50%";
boxIn.style.borderTopRightRadius = "50%";
boxIn.style.borderBottomRightRadius = "50%";
boxIn.style.borderBottomLeftRadius = "50%";

function radiusPreviewer(x, input){
  let value = input.value;

  switch(x){
    case 'a':
      console.log(boxIn.style.borderTopLeftRadius = value + "%");
      break;
    case 'b':
      console.log(boxIn.style.borderTopRightRadius = value + "%");
      break;
    case 'c':
      console.log(boxIn.style.borderBottomRightRadius = value + "%");
      break;
    case 'd':
      console.log(boxIn.style.borderBottomLeftRadius = value + "%");
      break;
    case 'e':
      console.log("e");
      break;
    case 'f':
      console.log("f");
      break;
    case 'g':
      console.log("g");
      break;
  }

  code[0].value = boxIn.style.borderTopLeftRadius + " " + boxIn.style.borderTopRightRadius + " " + boxIn.style.borderBottomRightRadius + " " + boxIn.style.borderBottomLeftRadius + " / ";
}

//border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;