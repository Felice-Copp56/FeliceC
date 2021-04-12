// mobile menu 
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click',()=>{
    navbarMenu.classList.toggle('is-active')
});

//tabs
const tabs = document.querySelectorAll('.tabs li');
const tabContentBoxes = document.querySelectorAll('#tab-content > div');

tabs.forEach((tab)=>{
    tab.addEventListener('click', () =>{
        tabs.forEach(item => item.classList.remove('is-active'))
        tab.classList.add('is-active');

        const target = tab.dataset.target;
        tabContentBoxes.forEach(box => {
            if(box.getAttribute('id')===target){
                box.classList.remove('is-hidden');
            }
            else
            {
                box.classList.add('is-hidden')
            }
        });
    })
})

function typewrite(target,text,loop,speed)
{
    target = document.getElementById(target);
    if(speed===undefined) {speed=200;}
    if(loop===undefined) {loop=false;}
    let pointer = 0;
    let timer = setInterval(function(){
        pointer++;
        if(pointer<=text.length){
            target.innerHTML = text.substring(0,pointer);
        }
        else
        {
            if(loop){pointer=0;}
            else {clearInterval(timer);}
        }
    },speed);
}

//modal popup
const signupButton = document.querySelector('#signup');
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');

signupButton.addEventListener('click',()=>{
    modal.classList.add('is-active');
})
modalBg.addEventListener('click',()=>{
    modal.classList.remove('is-active');
})



