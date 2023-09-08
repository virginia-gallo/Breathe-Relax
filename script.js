const container = document.querySelector('.container')
const text = document.querySelector('#text')
//Rotación//
const totalTime = 7500
const breathTime= (totalTime / 5) * 2 //3 seconds//
const holdTime = totalTime / 5

breatheAnimation()

function breatheAnimation () {
    text.innerHTML = 'Breathe in '
    container.className = 'container grow'
    
    setTimeout(() => {
        text.innerText = 'Hold '
       
        setTimeout(() =>{
          text.innerText = 'Breathe Out' 
           container.className = 'container shrink'
        }, holdTime)
    }, breathTime)
} 

setInterval(breatheAnimation, totalTime)

/15.42//