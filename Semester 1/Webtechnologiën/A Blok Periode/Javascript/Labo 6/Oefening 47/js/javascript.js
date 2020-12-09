let input = 4;
let output;

if (input%2){
    output = 0;
}else{
    output=1;
}

let mainHeading=document.getElementById("mainHeading");
mainHeading.textContent = output;