// SCRIPTS REGISTRO

const firstName = document.getElementById("name");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const adress = document.getElementById("adress");
const adress2 = document.getElementById("adress2");
const city = document.getElementById("city");
const province = document.getElementById("province");
const postalCode = document.getElementById("postalCode");
const buttonSumbit = document.getElementById("enviarRegistro");

buttonSumbit.addEventListener("click", (e) =>{
    e.preventDefault();
    localStorage.setItem("firstName", firstName.value);
    localStorage.setItem("lastName", lastName.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
    localStorage.setItem("adress", adress.value);
    localStorage.setItem("adress2", adress2.value);
    localStorage.setItem("city", city.value);
    localStorage.setItem("province", province.value);
    localStorage.setItem("postalCode", postalCode.value);
    alert("Tus datos se guardaron correctamente");
})

let user1 = [
    localStorage.getItem("firstName"),
    localStorage.getItem("lastName"),
    localStorage.getItem("email"),
    localStorage.getItem("password"),
    localStorage.getItem("adress"),
    localStorage.getItem("adress2"),
    localStorage.getItem("city"),
    localStorage.getItem("province"),
    localStorage.getItem("postalCode"),
]

// SCRIPTS INDEX

const nameLogin = document.getElementById("nameLogin");
const lastNameLogin = document.getElementById("lastNameLogin");
const emailLogin = document.getElementById("emailLogin");
const passwordLogin = document.getElementById("passwordLogin");
const buttonJoin = document.getElementById("ingresar");

buttonJoin.addEventListener("click", (e)=>{
    e.preventDefault();
    if (nameLogin.value == user1.firstName && lastNameLogin.value == user1.lastName && emailLogin.value == user1.email && passwordLogin.value == user1.password){
        console.log("Felicitaciones, accediste correctamente");
    } else {
        console.log("Error en la validacion, volve a intentarlo");
    } 
})
