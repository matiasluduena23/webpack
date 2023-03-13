const toggle = document.querySelector('#toggle-nav');

const nav = document.querySelector('.list-nav');


toggle.addEventListener('click', ()=>{
  nav.classList.toggle('active');
})

function closeMenu(){
  window.addEventListener('resize', () =>{
    if(window.innerWidth> 900){
      
    }
  });
}

document.body.addEventListener('click', closeMenuonClick);
function closeMenuonClick(e){
  
  if(e.target.classList.contains('item-nav')){
    nav.classList.remove('active');
  }
 
}
