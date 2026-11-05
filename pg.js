let upper = document.getElementById("upper")
let lower = document.getElementById("lower")
let numbers = document.getElementById("numbers")
let symbols = document.getElementById("symbols")

let range = document.getElementById("range").addEventListener("input",function(){
  document.getElementById("num").innerHTML = this.value;
})
function genpass(){
  let char = "";
  if(upper.checked){
    char += "ABCDEFGHIJKLMONPQRSTUVWXYZ"
  }
  if(lower.checked){
    char += "abcdefghijklmnopqrstuvwxyz"
  }
  if(numbers.checked){
    char +="0123456789"
  }
  if(symbols.checked){
    char += "!@#$%^&*"
  }

  let range =document.getElementById("range")
  // let char = "01234556789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPRSTUVWXYZ!@#$%^&*"
  let password ="";
  let passlength = parseInt(range.value)
  for(let i=0;i<passlength;i++){
    let random = Math.floor(Math.random()*char.length)
    password += char[random]
    
  }

  document.getElementById("password").value = password
}
function copypass(){
  let password=document.getElementById("password")
  password.select()
  document.execCommand("copy")
  alert("Password copied")
}
