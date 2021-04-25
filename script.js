let list = document.querySelectorAll('ul li a');
let toggle = document.querySelector('#toggle');
let header = document.getElementById('head');
let navBar = document.getElementById('navbar');
let icon = document.querySelector('.fa');
let icon1 = document.querySelector('.arrow .fa');
let arrow = document.querySelector('.arrow');
let body = document.querySelector('body');
let hyperRef = document.querySelector('a[href = "#foot"]');

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

icon.addEventListener('click', function() {
    if (icon.className == 'fa fa-moon-o') {
        icon.className = icon.className.replace('fa-moon-o', 'fa-sun-o');
        body.classList.add('darkLight');
    } else {
        icon.className = icon.className.replace('fa-sun-o', 'fa-moon-o');
        body.classList.remove('darkLight');
    }
})

icon1.addEventListener('click', function() {
    if ((icon1.className == 'fa fa-angle-double-down')) {
        icon1.className = icon1.className.replace('fa-angle-double-down', 'fa-angle-double-up');
        arrow.classList.add('up');
        hyperRef.setAttribute('href', '#foot');
    } else {
        icon1.className = icon1.className.replace('fa-angle-double-up', 'fa-angle-double-down');
        arrow.classList.remove('up');
        hyperRef.setAttribute('href', '#home');
    }
})
