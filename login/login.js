
function salvar (){
    var email = document.getElementById("email").value
    var senha = document.getElementById("senha").value

    if(email == "teste@teste.com" && senha == 123){
        window.location.href = "../home/home.html"
    }else {
        alert("Email ou senha incorreto")
    }

}