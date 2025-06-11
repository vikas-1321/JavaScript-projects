const passwordInput = document.getElementById('password');
const generateButton = document.getElementById('generate');

function Genatatepassword() {
    const length = 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    passwordInput.value = password;
}
function CopyToClipboard() {
    passwordInput.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}