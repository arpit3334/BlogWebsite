burger= document.querySelector('.burger')
navbar= document.querySelector('.navbar')
nav_list= document.querySelector('.nav_list')

rightnav= document.querySelector('.rightnav')



burger.addEventListener('click',()=>{
    rightnav.classList.toggle('visible');
    nav_list.classList.toggle('visible')
})