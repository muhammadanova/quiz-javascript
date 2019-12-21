function validate(str){
  if(str.length === 0 || str[0] === ' ' || str.length < 3){
    return false
  }
  return true
}

function startGame(){
  let username = document.getElementById('username').value
  if(validate(username)){
    window.localStorage.setItem('username',username)
    main()
  }else{
    if(username.length === 0){
      alert('Masukan nama anda terlebih dahulu')
    }else if(username[0] === ' '){
      alert('Masa nama kamu depannya space -__- ganti ya hehe')
    }else if(username.length < 3){
      alert('Emang bener nama kamu cuma segitu')
    }
  }
}

function checkUser(){
  if(window.localStorage.getItem('username') !== null){
    return true
  }
  return false
}

function main(){
  let start = document.getElementById("start")
  let main = document.getElementById("main")
  let user = document.getElementById('user')
  if(checkUser()){
    start.style.display = "none"
    main.style.display = "block"
    user.innerHTML = '<h6>Selamat bermain</h6><h5>'+window.localStorage.getItem('username')+'</h5>'
  }
}

function logout(){
  window.localStorage.removeItem('username')
  window.location.reload()
}