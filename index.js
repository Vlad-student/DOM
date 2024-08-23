const root = document.getElementById('root');
console.dir(root)

const h1 = document.createElement('h1');
h1.textContent = ' i create h1';
h1.classList.add('heading');
h1.addEventListener('click', ()=>{
    h1.style.color = 'red'
})
console.dir(h1);
console.log(h1);

const btn = document.createElement('button');
btn.textContent = 'click me'

const em = document.createElement('em');
em.textContent ='!!!!'

h1.append(em);

root.append(btn, h1)
