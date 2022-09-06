inscr = document.querySelector('.inscr');
modal = document.querySelector('.modal-fade');
content = document.querySelector('.modal-content')
clos = document.querySelector('.close')

inscr.addEventListener('click', (e)=>{
    modal.style.visibility='visible';
    content.style.width='350px'
    

});
clos.addEventListener('click', (u)=>{
    modal.style.visibility='hidden'
});