const initApp=()=>{
    const brgrEl=document.getElementById("hamburger-button");
    const menuEl=document.getElementById("mobile-menu");
    const toogleMenu=()=>{
        menuEl.classList.toggle('hidden');
        menuEl.classList.toggle("flex");
        brgrEl.classList.toggle("toggle-btn");
    }
    brgrEl.addEventListener('click',toogleMenu)
    menuEl.addEventListener('click',toogleMenu)
}

document.addEventListener('DOMContentLoaded',initApp);
