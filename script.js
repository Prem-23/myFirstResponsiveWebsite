// to select active Screen

let activeScreen = document.querySelectorAll('ul li a');
activeScreen.forEach(item => {
    item.addEventListener('click', function() {
        home = document.querySelector('.active');
        home.className = home.className.replace('active', '');
        item.className += 'active';
    })
})

// moon to sun

let icon = document.querySelector('.moon');
let body = document.querySelector('body');
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

let icon1 = document.querySelector('.angle');
let hyperRef = document.querySelector('a[href = "#foot"]');
icon1.addEventListener('click', function() {
    if (icon1.className == 'fa fa-angle-double-down angle') {
        icon1.className = icon1.className.replace('fa-angle-double-down', 'fa-angle-double-up');
        hyperRef.setAttribute('href', '#foot');
    } else {
        icon1.className = icon1.className.replace('fa-angle-double-up', 'fa-angle-double-down');
        hyperRef.setAttribute('href', '#home');
    }
})
