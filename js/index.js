// Your code goes here

//turn background grey back to white
const body = document.querySelector('body'); 


    
body.addEventListener('keypress', () => {
    const curColor = body.style.backgroundColor;
        if (curColor === "white"){
        body.style.backgroundColor = "gray";
        }
        else
        {
        body.style.backgroundColor = "white";
        }
    })


//transparent header
window.addEventListener('scroll', (e) => {
    const nav = document.querySelector(".main-navigation");
    if (window.scrollY === 0) {
        nav.style.background = "white";
    } else {
        nav.style.background = "rgba(255, 255, 255, 0.5)";
    }
});


const stopLink = document.querySelector('.nav')
stopLink.addEventListener('click', (event) => {
  event.preventDefault()
  event.stopPropagation()
})

//hover main h2
const headerIn = document.querySelector("h2")
const headerOut = document.querySelector("h2")


headerIn.addEventListener('mouseover', (event) => {
    headerIn.style.color = "red";
})

headerOut.addEventListener('mouseout', (event) => {
    headerOut.style.color = 'black';
})

//hover h2
const headerIn1 = document.querySelectorAll(".content-section h2")
const headerOut1 = document.querySelectorAll(".content-section h2")

headerIn1.forEach(headerChange => {
headerChange.addEventListener('mouseover', (event) => {
    headerChange.style.color = "purple";
})
})
headerOut1.forEach(headerChange => {
headerChange.addEventListener('mouseout', (event) => {
    headerChange.style.color = 'black';
})
})

//bigger intro img
const busImg = document.querySelector(".intro img")
busImg.addEventListener('mouseenter', () => {
  busImg.style.transform = "scale(1.5)" 
  busImg.style.transition = "all 0.15s" 
})
busImg.addEventListener('mouseleave', (event) => {
    busImg.style.transform = "scale(1.0)"
})

//double click p
const dblClick = document.querySelectorAll(".content-section p")
dblClick.forEach(pParty => {
pParty.addEventListener('dblclick', (event) => {
    event.target.style.color = "pink"
    event.stopPropagation()
  })
})

//right click deletes
window.addEventListener('contextmenu', (event) => {
    event.target.style.display = "none";
});

//button change
const btnStyle = document.querySelectorAll('.btn')
btnStyle.forEach(btnChange => {
btnChange.addEventListener('mouseover', (event) => {
    event.target.style.border = '5px dashed hotpink'
    event.target.style.color = 'teal'
    event.target.style.backgroundColor = 'white'
})
})

//change h4
const destination = document.querySelectorAll('.destination h4')
destination.forEach(destination1 => {
destination1.addEventListener('mouseenter', (event1) =>{
    event1.target.style.fontSize = '2.4rem'
})
})

// //troll when scroll
window.addEventListener('scroll', () => {
    if (window.scrollY >= 1100) {
      alert("TROLLOLOLLLL!")
    }
  })


