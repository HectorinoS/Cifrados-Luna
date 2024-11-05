function mostrarParametro() {
    const metodo = document.getElementById("metodo").value;
    const parametroCesar = document.getElementById("parametro-cesar");
    const parametroVigenere = document.getElementById("parametro-vigenere");

    if (metodo === "cesar") {
        parametroCesar.style.display = "block";
        parametroVigenere.style.display = "none";
    } else if (metodo === "vigenere") {
        parametroCesar.style.display = "none";
        parametroVigenere.style.display = "block";
    }
}

function cifrar() {
    const metodo = document.getElementById("metodo").value;
    const mensaje = document.getElementById("mensaje").value;
    let resultado = "";

    if (metodo === "cesar") {
        const desplazamiento = parseInt(document.getElementById("desplazamiento").value);
        resultado = cifrarCesar(mensaje, desplazamiento);
    } else if (metodo === "vigenere") {
        const clave = document.getElementById("clave").value;
        resultado = cifrarVigenere(mensaje, clave);
    }

    document.getElementById("resultado").textContent = resultado;
}

function descifrar() {
    const metodo = document.getElementById("metodo").value;
    const mensaje = document.getElementById("mensaje").value;
    let resultado = "";

    if (metodo === "cesar") {
        const desplazamiento = parseInt(document.getElementById("desplazamiento").value);
        resultado = cifrarCesar(mensaje, -desplazamiento);
    } else if (metodo === "vigenere") {
        const clave = document.getElementById("clave").value;
        resultado = descifrarVigenere(mensaje, clave);
    }

    document.getElementById("resultado").textContent = resultado;
}

// Cifrado César
function cifrarCesar(texto, desplazamiento) {
    return texto.replace(/[a-z]/gi, (char) => {
        const base = char <= "Z" ? 65 : 97;
        return String.fromCharCode(((char.charCodeAt(0) - base + desplazamiento) % 26 + 26) % 26 + base);
    });
}

// Cifrado Vigenère
function cifrarVigenere(texto, clave) {
    let resultado = "";
    let claveCompleta = clave.repeat(Math.ceil(texto.length / clave.length)).slice(0, texto.length);
    for (let i = 0; i < texto.length; i++) {
        const charCode = texto[i].charCodeAt();
        if (charCode >= 65 && charCode <= 90) {
            resultado += String.fromCharCode(((charCode - 65 + (claveCompleta[i].toUpperCase().charCodeAt() - 65)) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            resultado += String.fromCharCode(((charCode - 97 + (claveCompleta[i].toLowerCase().charCodeAt() - 97)) % 26) + 97);
        } else {
            resultado += texto[i];
        }
    }
    return resultado;
}

function descifrarVigenere(texto, clave) {
    let resultado = "";
    let claveCompleta = clave.repeat(Math.ceil(texto.length / clave.length)).slice(0, texto.length);
    for (let i = 0; i < texto.length; i++) {
        const charCode = texto[i].charCodeAt();
        if (charCode >= 65 && charCode <= 90) {
            resultado += String.fromCharCode(((charCode - 65 - (claveCompleta[i].toUpperCase().charCodeAt() - 65) + 26) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            resultado += String.fromCharCode(((charCode - 97 - (claveCompleta[i].toLowerCase().charCodeAt() - 97) + 26) % 26) + 97);
        } else {
            resultado += texto[i];
        }
    }
    return resultado;
}
