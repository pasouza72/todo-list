
function salvar (){
    var email = document.getElementById("email").value
    var senha = document.getElementById("senha").value

    if(email == "teste@teste.com" && senha == 123){
        alert("pode logar no sistema")
    }else {
        alert("Email ou senha incorreto")
    }

}