const $root = document.getElementById('root');
const notFound = 'views/404.html';
const home = 'views/home.html';

$menu.addEventListener('click',(e)=>{
    e.preventDefault()
    if (e.target.tagName=='IMG'){
        let href = e.target.parentNode.getAttribute('href');
        window.location.hash='/'+href;
        loadPage(href) 
    }
    
})


function changeUrl(url){
    const obj={title:url}
    history.replaceState(obj,'title','#'+url)
}
function loadPage(path){
fetch(path)
.then((response)=>{
    if (response.ok){
        return response.text();
    }
    else{
        return Promise.reject();
    }
})

.then((html)=>{
    
    animFetchContent(html);
})
.catch(()=>{
    eror404();
})
}
function eror404(){
    fetch(notFound)
    .then((response)=>{
        return response.text()
    })
    .then((err)=>{
        $root.innerHTML=notFound;
        window.location = 'views/404.html'
    })
}

window.onload=()=>{
    loadPage(window.location.hash.slice(2))
    if (window.location.pathname.length>=1&&!window.location.hash){
        loadPage(home);
    }
    else{
        loadPage(window.location.hash.slice(2))
    }
}


function animFetchContent(content){
    if (content.length>0){
        
        if ($root.classList.contains('show')){
            $root.classList.remove('show');
            setTimeout(() => {
                $root.classList.add('show');
                $root.innerHTML= content;
            }, 400);
        }
        else{
            $root.classList.add('show');
        }
        
    }
}

