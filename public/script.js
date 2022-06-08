// Frontend Code
// This is for client side Doing Work
let socket = io()    // io is a type of function that we get in socket variable

let boomBtn = document.getElementById('boom')
boomBtn.onclick = function() {
    socket.emit('boom')
}

socket.on('whizz' ,() => {  //Everytime if whizz event is recieved on frontend it creates the div with element whizz and appended to the body whizzshows on the frontend side.
    let div = document.createElement('div')
    div.innerText = 'whizz'
    document.body.appendChild(div)
})