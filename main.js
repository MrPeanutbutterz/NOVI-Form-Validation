const userTextField = document.getElementById('username')
const userTextError = document.getElementById('username-error')

userTextField.addEventListener('keyup', (e) => {

    let keys = e.target.value.split("")
    let symbol = keys.find((sym) => {
        return sym === "@"
    })

    if (symbol !== undefined) {
        userTextError.textContent = "Gebruikersnaam mag geen @ bevatten"
    } else {
        userTextError.textContent = " "
    }
})


const passwordTextField = document.getElementById('password')
const passwordTextError = document.getElementById('password-error')

passwordTextField.addEventListener('keyup', (e) => {

    if (e.target.value.length > 0 && e.target.value.length < 6) {
        passwordTextError.textContent = "Wachtwoord is te kort, gebruik minimaal 6 tekens"
    } else {
        passwordTextError.textContent = " "
    }
})