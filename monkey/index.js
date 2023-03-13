const closedFace = document.querySelector('.close')
const openFace = document.querySelector('.open')

closedFace.addEventListener('click', () =>{
if( openFace.classList.contains('open'))
openFace.classList.add('active')
closedFace.classList.remove('active')
})

openFace.addEventListener('click', () =>{
    if( closedFace.classList.contains('close')){
        closedFace.classList.add('active');
        openFace.classList.remove('active');
    }

})

// closedFace.addEventListener('click', () =>{
//  if(openFace.classList.contains('open')){
//     openFace.classList.add('active')
//     closedFace.classList.remove('active')
//  }  
// })

// openFace.addEventListener('click', () => {
// if(closedFace.classList.contains('close')){
//     closedFace.classList.add('active')
//     openFace.classList.remove('active')
// }
// })

















