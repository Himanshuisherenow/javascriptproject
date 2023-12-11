const content = document.querySelector('.scroll-indicator')

content.addEventListener('scroll', (e)=>{
e.preventDefault()
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;


    const indicator = document.getElementById('scroll-indicator');
    indicator.style.width = scrollPercentage + '%';
})     