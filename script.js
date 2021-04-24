let list = document.querySelectorAll('ul li a');
let toggle = document.querySelector('#toggle');
let header = document.getElementById('head');
let navBar = document.getElementById('navbar');

list.forEach(item => {
    item.addEventListener('click', function() {
        let activeNav = document.querySelector('.home');
        activeNav.className = activeNav.className.replace('home', '');
        item.className += 'home';
    })
})


document.onclick = function(e) {
    if (e.target.id !== 'navBar' && e.target.id !== 'toggle') {
        navBar.classList.remove('active');
        toggle.classList.remove('active');
    }
}

toggle.onclick = function() {
    toggle.classList.toggle('active');
    navBar.classList.toggle('active');
}