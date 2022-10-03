const form = document.querySelector('.login-form')

form.addEventListener('submit', login)

function login(submit) {
    submit.preventDefault()
    const {
        elements: { email, password },
    } = submit.currentTarget

    if (email.value === '' || password.value === '') {
        return alert('Please fill in all the fields!')
    }
    const userDetails = { email: email.value, Password: password.value }
    
    console.log(userDetails)
    submit.currentTarget.reset()
}
