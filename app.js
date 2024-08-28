const areaTexto = document.querySelector(".textArea");
const imagenMuneco = document.querySelector(".img-muneco");
const textoUno = document.querySelector(".msj-uno");
const textoDos = document.querySelector(".msj-dos");
const btnEncript = document.querySelector(".botonEncriptar");
const btnDecript = document.querySelector(".botonDesencriptar");
const btnCopiar = document.querySelector(".copy");



const keys = [
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"]
];

function encriptartexto (){

} 

function encriptartexto(mensaje){
    let textoEncriptado = "";
    for(let i = 0; i < mensaje.length; i++){  
    let letra = mensaje[i];
    let encripta = letra;
    for(let j = 0; j < keys.length; j++){
        if(letra === keys[j][0]){
            encripta = keys[j][1];
        break;
        }
    }
    textoEncriptado += encripta;
  }
  return textoEncriptado;
}

function desencriptartexto(mensaje){
    let textoDesencriptado = mensaje;
    for(let i = 0; i < keys.length; i++){
        let regular = new RegExp(keys[i][1],'g');
        textoDesencriptado = textoDesencriptado.replace(regular, keys[i][0]);
    }
    return textoDesencriptado;
}

areaTexto.addEventListener("input",(e)=>{
    imagenMuneco.style.display = "none";
    textoUno.textContent = "";
    textoDos.style.display = "none";

    console.log(e.target.value);

})

btnEncript.addEventListener("click",(e)=>{
    e.preventDefault();
    let mensaje = areaTexto.value.toLowerCase();
    let textoEncriptado = encriptartexto(mensaje);
    textoUno.textContent = textoEncriptado;
    btnCopiar.style.visibility = "inherit";
})

btnDecript.addEventListener("click",(e)=>{
    e.preventDefault();
    let mensaje = areaTexto.value.toLowerCase();
    let textoDesencriptado = desencriptartexto(mensaje);
    textoUno.textContent = textoDesencriptado;
    btnCopiar.style.visibility = "inherit";
})
btnCopiar.addEventListener('click',()=>{
    let copyText = textoUno.textContent;
    navigator.clipboard.writeText(copyText).then(()=>{
        console.log('Se copio el texto: ${copyText}')
    })

});
