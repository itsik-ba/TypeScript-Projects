
// adding event to the buttons, and let every button name.
let btnwat = document.querySelector('#wat');
let btntibs = document.querySelector('#tibs');
let btnkinche = document.querySelector('#kinche');
let btnbev = document.querySelector('#bev');
// the burger that will add new imag 
let imgburger = document.querySelector('#imgburger')
   imgburger.addEventListener('click', ()=>{
     document.getElementById('loadimg').style.display = "flex"
     document.getElementById('loadimgbtn').style.display = "flex"
     document.getElementById('label1').style.display = "flex"
     document.getElementById('label2').style.display = "flex"
     document.getElementById('par').style.display = "flex"
     document.getElementById('label3').style.display = "flex"
     document.getElementById('dis').style.display = "flex"

   
    // back to none
      imgburger.addEventListener('dblclick', ()=>{
      document.getElementById('loadimg').style.display = "none"
      document.getElementById('loadimgbtn').style.display = "none"
      document.getElementById('label1').style.display = "none"
      document.getElementById('label2').style.display = "none"
      document.getElementById('par').style.display = "none"
      document.getElementById('label3').style.display = "none"
      document.getElementById('dis').style.display = "none"
     })
   })


// this is the button who gets to add imges 
let loadimgbtn = document.querySelector('#loadimgbtn');

// making the clicked button to display or not
btnwat.addEventListener("click", ()=>{
  document.querySelector('.watgal').style.display = "flex"
  document.querySelector('.tibsgal').style.display = "none"
  document.querySelector('.kinchegal').style.display = "none"
  document.querySelector('.bevgal').style.display = "none"
})

btntibs.addEventListener("click", ()=>{
  document.querySelector('.watgal').style.display = "none"
  document.querySelector('.tibsgal').style.display = "flex"
  document.querySelector('.kinchegal').style.display = "none"
  document.querySelector('.bevgal').style.display = "none"
})
btnkinche.addEventListener("click", ()=>{
  document.querySelector('.watgal').style.display = "none"
  document.querySelector('.tibsgal').style.display = "none"
  document.querySelector('.kinchegal').style.display = "flex"
  document.querySelector('.bevgal').style.display = "none"
})
btnbev.addEventListener("click", ()=>{
  document.querySelector('.watgal').style.display = "none"
  document.querySelector('.tibsgal').style.display = "none"
  document.querySelector('.kinchegal').style.display = "none"
  document.querySelector('.bevgal').style.display = "flex"
})
// this one is add new img to the gallery
loadimgbtn.addEventListener('click', (e)=>{
    e.preventDefault()
  let src = document.getElementById('loadimg')

  let watdiv = document.querySelector('.watgal')
  let tibsdiv = document.querySelector('.tibsgal')
  let kinchediv = document.querySelector('.kinchegal')
  let bevdiv = document.querySelector('.bevgal')

  let img = document.createElement("img")
  img.setAttribute('src', src.value)

 if(watdiv.style.display == 'flex')
   watdiv.appendChild(img)

 else if(tibsdiv.style.display == "flex")  
   tibsdiv.appendChild(img)

 else if(kinchediv.style.display == "flex")  
   kinchediv.appendChild(img)

 else if(bevdiv.style.display == "flex")  
   bevdiv.appendChild(img)


})