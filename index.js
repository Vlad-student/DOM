// const button = document.getElementById('uniq');
//     button.style.backgroundColor = 'green';

    //  const buttons = document.getElementsByClassName('btn');
    //  for (const btn of buttons) {
    //     btn.style.display = 'block' ;
    //  }
    //     console.dir(buttons);
   

         const buttons = document.getElementsByClassName('btn');
 for (const btn of buttons) {
btn.addEventListener('click', ()=>{
btn.style.fontSize='30px'  
    })
 }

const h2Block = document.querySelector('#block> h2')
console.dir(h2Block);
h2Block.style.color ='green'

 const btnsBlock = document.querySelectorAll('#block>.btn')
 console.dir(btnsBlock);

 btnsBlock.forEach(element => {
    element.style.backgroundColor ='yellow'
 });


const allLi = document.querySelectorAll('#block>ol>li')
allLi.forEach(element => {
    element.addEventListener('click', ()=>{
        element.style.textContent = 'WoW' 
})
})
;

const item1 = document.querySelector('#block>ol>li')
item1.forEach(item1 => {
    item1.addEventListener( 'click', ()=>{
item1.style.backgroundColor = 'pink';
    })
});


