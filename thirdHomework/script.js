let a = document.getElementById('change_color');
let b = document.getElementsByClassName('first')[0];
a.addEventListener('click', function () {
    b.classList.toggle('active');
});

let c = document.getElementById('change_title');
let d = document.getElementsByTagName('h1')[0];
c.addEventListener('click', function () {
    d.classList.toggle('Name')
    if (d.classList.contains('Name'))
        d.innerText = 'Kalythuk Dmytro'
    else
        d.innerText = 'Title'
});

let e = document.getElementById('words_counter');
let r = document.getElementsByClassName('second')[0];
let f = document.getElementsByClassName('counter')[0];
let counter = r.textContent.split(' ').length;
console.log(counter);
e.addEventListener('click', function () {
    f.textContent += counter;
});

let t = document.getElementById('get_text');
let y = document.getElementsByClassName('second')[0];
t.addEventListener('click', function () {
    let l = y.textContent;
    alert(l);
    y.textContent="";
});
