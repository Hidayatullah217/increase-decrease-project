let counter = document.querySelector('.counter')
let increase = document.querySelector('.increase')
let reload = document.querySelector('.reload')
let decrease = document.querySelector('.decrease')


increase.addEventListener('click', ()=>{
    counter.textContent = Number(counter.textContent) + 1;
    counter.style.color = "green";
})

decrease.addEventListener('click', ()=>{
    counter.textContent = Number(counter.textContent) - 1;
    counter.style.color = "red";
})

reload.addEventListener('click', ()=>{
    location.reload();
})