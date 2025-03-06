function encryptText() {
    let inputText = document.getElementById("inputText").value.trim();// Eliminar espacios en blanco al inicio y final
    let shift = parseInt(document.getElementById("shift").value) % 26;//el valor debe estar entre 1 a 25 el desplazamiento
    let outputText = "";

    // Validar si hay texto en el campo de entrada
    if (inputText === "") {
        alert("El campo de entrada está vacío. Por favor, ingresa un texto para Encriptar.");
        return; 
    }

    for (let i = 0; i < inputText.length; i++) {
        let char = inputText[i];
        if (char.match(/[a-z]/i)) {
            let code = inputText.charCodeAt(i);
            let base = code >= 65 && code <= 90 ? 65 : 97;
            char = String.fromCharCode(((code - base + shift) % 26) + base);
        }
        outputText += char;
    }

    document.getElementById("outputText").value = outputText;
}

function decryptText() {
    let inputText = document.getElementById("outputText").value.trim(); // Eliminar espacios en blanco al inicio y final
    let shift = parseInt(document.getElementById("shift").value) % 26;//el valor debe estar entre 1 a 25 el desplazamiento
    let outputText = "";

    // Validar si hay texto en el campo de salida
    if (inputText === "") {
        alert("El campo de resultado está vacío. Por favor, ingresa un texto para Desencriptar.");
        return; 
    }

    for (let i = 0; i < inputText.length; i++) {
        let char = inputText[i];
        if (char.match(/[a-z]/i)) {
            let code = inputText.charCodeAt(i);
            let base = code >= 65 && code <= 90 ? 65 : 97;
            char = String.fromCharCode(((code - base - shift + 26) % 26) + base);
        }
        outputText += char;
    }

    document.getElementById("outputText").value = outputText;
}
