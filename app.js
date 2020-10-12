const navigation = document.querySelector('nav')

window.addEventListener('scroll', () => {
    if(window.scrollY > 300){
        navigation.classList.add('nav-anim');
    }else{
        navigation.classList.remove('nav-anim');
    }
})