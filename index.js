const root = document.getElementById('root');
// const btnSubscribe = document.createElement('button');
// btnSubscribe.textContent ='Subscribe now'
// root.append(btnSubscribe)

// // відтермінований запуск коду setTimeout(функція, час у мілі секундах)
// setTimeout (() => {
//     const subscribe = document.createElement('div');
//     subscribe.classList.add('subscribe')
//     const close = document.createElement('span');
//     close.textContent  = 'X';
//     close.addEventListener('click', () =>{
//         document.querySelector('.subscribe').remove();
//     })
//     const h2 = document.createElement('h2');
//     h2.textContent = ' Subscribe to our email newsletter';
//     const form = document.createElement('form');
//     form.className = 'subscribe-form';
//     const input = document.createElement('input');
//     const button = document.createElement('button');
//     button.textContent = 'Subcribe';
//     subscribe.append(close,h2,form);
//     form.append(input,button);
//     root.append(subscribe);
    
// }, 5000);


// btnSubscribe.addEventListener('click', () => {
//     clearTimeout(idTimeout)
// })

// викликає код з певним інтервалом setInterval (функція, час у мілісекундах)
let count = 0;
const idInterval = setInterval(() => {
    console.log(count);
    count++;
    if (count>10) {
        clearInterval(idInterval)
    }
}, 1000);


console.log('start');
set
