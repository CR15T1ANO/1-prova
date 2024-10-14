var usuario = document.querySelector('#usuario')
var logout = document.querySelector('#logout')


if(localStorage.getItem('email')){
    let usuarioRecuperado = localStorage.getItem('nome')
    usuario.innerHTML = usuarioRecuperado
} else{
    alert('Voce nao esta logado! Logue para ter acesso ao sistema!')
    location.href = 'login.html'
}

logout.addEventListener('click',()=>{
    localStorage.clear()
    alert("Logout efetuado com suceso!")
    location.href = 'login.html'
})





