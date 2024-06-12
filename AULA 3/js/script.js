mudaFundo = () =>{
    //alert("mudei o fundo")
    //querySelector("body").style.background = "Purple"

document.documentElement.classList.toggle("light");

const isLight = document.documentElement.classList.contains("light");

const imagem = isLight ? "../img/1d0f4b52-ce12-4c35-bd5d-acdabb92b2d6 1 (1).png" : "";

document.querySelector("#perfil img").setAttribute("src", imagem);
}