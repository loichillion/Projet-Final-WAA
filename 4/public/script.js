

var socket = io();

let username = ''



//user

function registerUser(){
  let input2 = document.getElementById('username_field')
  let submit_btn = document.getElementById('btnSubmit')
  let submit_btn2 = document.getElementById('btnSubmit2')
  let user_message = document.getElementById('user_message')
  if(input2.value.length >= 3){
      //Unlock draw button
      if(submit_btn.disabled == true ){ submit_btn.disabled = false;}
      username = input2.value
      user_message.innerHTML = `hello <b>${username}</b>, nice to meet you`
  }
  else{
      if(submit_btn.disabled == false ){ submit_btn.disabled = true}
      username = input2.value
      user_message.innerHTML = `You are no longer registered. Register to be able to see your drawings`
  }
}

function isUserRegistered(){
  return username != ''
}

addEventListener('load', () => {
  console.log("ici2")
  let submit_btn = document.getElementById('btnSubmit')
  //let submit_btn2 = document.getElementById('btnSubmit2')
  let input = document.getElementById('username_field')
  submit_btn.disabled = true
  //submit_btn2.disabled = true
})


const cquestion = document.querySelector('#divQuestion')

function adminQuestion(){
  let input = document.getElementById("cquestion").value
  cquestion.innerHTML = `<h3>${input}</h3>`
}