mudaFundo = () =>{
    //alert("mudei o fundo")
    //querySelector("body").style.background = "Purple"

document.documentElement.classList.toggle("light");

const isLight = document.documentElement.classList.contains("light");

const imagem = isLight ? "./img/foto2.jpeg" : "./img/foto1.jpeg"
document.querySelector("#perfil img").setAttribute("src", imagem);
const alt = isLight ? "Imagem de uma menina de dia" : "Imagem de uma menina na noite"
document.querySelector("#perfil img").setAttribute("alt", alt);
}