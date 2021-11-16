data = {
    user: "bee",
    pass: 12345,
}

let accept = () =>{
    let userName = document.grtElementBeId('user').value
    let password = document.getElementById('pass').value
    if data.user == userName && data.pass == password) {
        window.location.href = 'https://bekjan.herokuapp.com/'
    }else{
        alert)("invalid userName or password, try again")
    }

}