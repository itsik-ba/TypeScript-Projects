let bt = document.querySelectorAll('button');

bt.forEach(b =>{
    b.addEventListener('click', btnclick)
})

const ac = document.querySelector('.ac')
ac.removeEventListener('click', btnclick)
ac.addEventListener('click', clear)

function clear(){
    document.querySelector('.val').textContent = ''
}

let eq = document.querySelector('.eq')
eq.removeEventListener('click', btnclick)
eq.addEventListener('click', calc)

function calc(){
 let valEl = document.querySelector('.val')   
 valEl.textContent = eval(valEl.textContent)
}


function btnclick(){
    document.querySelector('.val').textContent += this.textContent
}

