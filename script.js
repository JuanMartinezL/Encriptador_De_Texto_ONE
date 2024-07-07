function encriptar() {
    var frase = document.getElementById("texto").value.toLowerCase();

    var textoEncriptado = frase.replace(/e/g, "enter");
    textoEncriptado = textoEncriptado.replace(/o/g, "ober"); 
    textoEncriptado = textoEncriptado.replace(/i/g, "imes");
    textoEncriptado = textoEncriptado.replace(/a/g, "ai");
    textoEncriptado = textoEncriptado.replace(/u/g, "ufat");

    document.getElementById("texto_out").value = textoEncriptado;
    document.getElementById("default").classList.add("invisible");
    document.getElementById("result").classList.remove("invisible");
}

function desencriptar() {
    var frase = document.getElementById("texto").value.toLowerCase();

    var textoDesencriptado = frase.replace(/enter/g, "e");
    textoDesencriptado = textoDesencriptado.replace(/ober/g, "o");
    textoDesencriptado = textoDesencriptado.replace(/imes/g, "i");
    textoDesencriptado = textoDesencriptado.replace(/ai/g, "a");
    textoDesencriptado = textoDesencriptado.replace(/ufat/g, "u");

    document.getElementById("texto_out").value = textoDesencriptado;
    document.getElementById("default").classList.add("invisible");
    document.getElementById("result").classList.remove("invisible");
}

function copiar() {
    var contenido = document.getElementById("texto_out").value;
    navigator.clipboard.writeText(contenido).then(function() {
        alert("Texto copiado al portapapeles");
    }, function(err) {
        alert("Error al copiar el texto: ", err);
    });
}

document.getElementById("enc").addEventListener("click", encriptar);
document.getElementById("des").addEventListener("click", desencriptar);
document.getElementById("copiar").addEventListener("click", copiar);
