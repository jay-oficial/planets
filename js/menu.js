const $menu = document.querySelector('.menu');
const $menuToggle = $menu.querySelector('.menu-toggle');
const $menuItem = $menu.querySelectorAll('.menu-item');
const $logo = document.getElementById('logo');


$menu.addEventListener('click',(e)=>{
    if(e.target==$menuToggle){
        $menu.classList.toggle('hidden');
    }
    if(e.target==$logo){
        window.location = window.location.pathname;
    }
})

window.addEventListener('load',()=>{
    toggleAnim()
})
window.addEventListener('hashchange',()=>{
    toggleAnim()
})


function toggleAnim(){
    if(!window.location.hash){
        $menuToggle.classList.add('disable');
    }
    else{
        $menuToggle.classList.remove('disable');
    }
}
