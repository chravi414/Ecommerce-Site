document.addEventListener('click', (event) => {
    const menuItem = document.querySelector('.menu-icon')
    if (event.target != menuItem && event.target.parentNode != menuItem){
        document.querySelector('.nav-list').classList.remove('show');
    } else {
        document.querySelector('.nav-list').classList.toggle('show')
    }
})