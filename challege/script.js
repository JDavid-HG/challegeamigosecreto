function encryptText() {
    let inputText = document.getElementById("inputText").value;
    let shift = parseInt(document.getElementById("shift").value);
    let outputText = "";

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
    let inputText = document.getElementById("inputText").value;
    let shift = parseInt(document.getElementById("shift").value);
    let outputText = "";

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
