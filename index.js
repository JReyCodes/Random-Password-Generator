const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let password1 = ""
let password2 = ""
let passwordElOne = document.getElementById("password-one")
let passwordElTwo = document.getElementById("password-two")
function generatePasswords() {
    password1 = ""
    password2 = ""
    for (let i=0; i < 15 ; i++){
        let random = Math.floor(Math.random() * characters.length)
        let random2 = Math.floor(Math.random() * characters.length)
        password1 += characters[random]
        password2 += characters[random2]
        passwordElOne.textContent = password1
        passwordElTwo.textContent = password2
    }
}