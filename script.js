const bar = document.getElementById('list-icon')
const nav= document.getElementById('nav')
const close = document.getElementById('close')
if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active')
    })
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active')
    })
}