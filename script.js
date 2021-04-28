let head1 = document.querySelector('h1');
let sign = document.querySelector('.sign');
let activeScreen = document.querySelectorAll('ul li a');
let icon = document.querySelector('.moon');
let body = document.querySelector('body');
let icon1 = document.querySelector('.angle');
let hyperRef = document.querySelector('a[href = "#foot"]');
let toggleList = document.getElementById('toggle');
let navBar = document.getElementById('navBar');


// to select active Screen

activeScreen.forEach(item => {
    item.addEventListener('click', function() {
        home = document.querySelector('.active');
        toggleList.classList.remove('active');
        navBar.classList.remove('show');
        home.className = home.className.replace('active', '');
        item.className += 'active';
    })
})
head1.addEventListener('click', function() {
    toggleList.classList.remove('active');
    navBar.classList.remove('show');
})
sign.addEventListener('click', function() {
    toggleList.classList.remove('active');
    navBar.classList.remove('show');
})

// moon to sun


icon.addEventListener('click', function() {
    if (icon.className == 'fa fa-moon-o moon') {
        icon.className = icon.className.replace('fa-moon-o', 'fa-sun-o');
        body.classList.add('darkLight');
    } else {
        icon.className = icon.className.replace('fa-sun-o', 'fa-moon-o');
        body.classList.remove('darkLight');

    }
})

// angle up and down

icon1.addEventListener('click', function() {
    toggleList.classList.remove('active');
    navBar.classList.remove('show');
    if (icon1.className == 'fa fa-angle-double-down angle') {
        icon1.className = icon1.className.replace('fa-angle-double-down', 'fa-angle-double-up');
        hyperRef.setAttribute('href', '#foot');
    } else {
        icon1.className = icon1.className.replace('fa-angle-double-up', 'fa-angle-double-down');
        hyperRef.setAttribute('href', '#home');
    }
})

// toggle

toggleList.onclick = function() {
    toggleList.classList.toggle('active');
    navBar.classList.toggle('show');
}
