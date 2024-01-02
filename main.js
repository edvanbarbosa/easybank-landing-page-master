const element = (e) => document.querySelector(e);
const elements = (e) => document.querySelectorAll(e);

const divMenuBurguerOrClose = element('.burguer-or-close');
const elementsDesktopNav = [element(".button-request-container"),element('.links-nav')]


const MobileState = ()=>{
    const containerMenuMobile = element('.mobile-menu-container');
    const menuIcon = element('.burguer-or-close-icon');


    elementsDesktopNav.map(e =>{
        e.style.display = 'none'
    });

    const OpenMenuMobile = () =>{
        containerMenuMobile.style.display = "flex";
        menuIcon.src = "images/icon-close.svg";
        menuIcon.classList.add('close');
        menuIcon.classList.remove('burguer');
        
        element('body').style.overflowY = 'hidden'

    };

    const CloseMenuMobile = () =>{
        containerMenuMobile.style.display = "none";
        menuIcon.src = "images/icon-hamburger.svg";
        menuIcon.classList.add('burguer');
        menuIcon.classList.remove('close');

        element('body').style.overflowY = 'scroll'

    };
    
    const controlMenuMobile = () =>{



        if(menuIcon.classList.contains('burguer')){
            OpenMenuMobile();
        }else{
            CloseMenuMobile();
        };




    };

    menuIcon.addEventListener('click', controlMenuMobile);

};

const DesktopState = () =>{
    elementsDesktopNav.map(e =>{
        e.style.display = 'flex'
    });
};

const verifyInnerWidth = ()=>{
    if(window.innerWidth > 950){
        divMenuBurguerOrClose.style.display = "none";
        DesktopState();
    }else{
        divMenuBurguerOrClose.style.display = "flex";
        MobileState();
    };
};

verifyInnerWidth();

window.onresize = () =>{
    verifyInnerWidth();

};