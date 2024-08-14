const buttons = document.querySelectorAll('button');
console.dir(buttons)

for (const btn of buttons) {
//    console.dir(btn.classList)
btn.classList.add('qwe','sdf','hgsdf') 
btn.addEventListener('mouseover', ()=>{
   btn.classList.add('active') 
})
btn.addEventListener('mouseout', ()=>{
    btn.classList.remove('active')
})
}