let boton = document.querySelector("#Tema");
let body = document.querySelector("body");
let darkMode = false
boton.addEventListener("click",()=>{
    if (darkMode == false){
        darkMode = true;
	   body.style.backgroundColor = "black";
    }else{
        darkMode = false;
        body.style.backgroundColor = "rgb(150, 136, 74)";
    }
})


