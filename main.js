const open_partners = function(event){
    const partner_toggle = document.querySelector(".partner-toggle");
    const contents = document.querySelector(".partner-contents");
    const partner_arrow = document.querySelector(".partner-arrow");
    const partner_contents = document.querySelector(".partner-contents");
    const partner_link = document.querySelector(".partner-link");
    //Click Partners ^

    // PARTNER TOGGLE
    on = true;
    partner_toggle.addEventListener("click", function(event){
        // contents.classList.toggle('open');
    
        // OPEN
        if(on == true){
            contents.style.opacity = "1";
            contents.style.transform = "translateY(2%)";
            console.log(on);
            partner_arrow.style.transform = "rotate(180deg)";
            partner_arrow.style.color = "rgb(0, 177, 79)";
            partner_toggle.style.pointerEvents = "all";
            partner_toggle.style.cursor = "pointer";
            partner_contents.style.pointerEvents = "all";
            partner_contents.style.cursor = "pointer";
            partner_link.style.pointerEvents = "all";
            on = false;
            }
        // CLOSE
        else if(on == false){
            contents.style.opacity = "0";
            contents.style.transform = "translateY(-10%)";
            partner_arrow.style.transform = "rotate(0deg)";
            partner_arrow.style.color = "rgb(54, 58, 69)";
            partner_contents.style.pointerEvents = "none";
            partner_contents.style.cursor = "none";
            partner_link.style.pointerEvents = "none";
            console.log(on);
            on = true;
        }

        // CLICK OUTSIDE (CLOSE)
        document.onclick = function(e){
            if(e.target.id !== 'contents'){
                contents.style.opacity = "0";
                contents.style.transform = "translateY(-10%)";
                partner_arrow.style.transform = "rotate(0deg)";
                partner_arrow.style.color = "rgb(54, 58, 69)";
                console.log(on);
                on = true;
            }
        }

        event.stopPropagation();
    })
}

// OPEN MENU

const open_menu = () =>{
    const menu_nav_button = document.querySelector(".menu-nav-button");
    const menu_nav_container = document.querySelector(".menu-nav-container");
    const logo_menu = document.querySelector(".logo-menu");
    const nav_links_right = document.querySelector(".nav-links-right");

    let on = true;

    menu_nav_button.addEventListener("click", function(event){
        // if(on == true){
        // menu_nav_container.style.display = "flex";
        // console.log(on);
        // menu_nav_container.style.pointerEvents = "none";
        // on = false;
        // }
        // else if(on == false){
        // menu_nav_container.style.display = "none";
        // console.log(on);
        // on = true;
        // }

        // OPEN
        if(on == true){
            menu_nav_button.classList.toggle('open-menu');
            logo_menu.style.opacity = "0";
            menu_nav_container.style.opacity = "1";
            menu_nav_container.style.transform = "translateY(1%)";
            console.log(on);
            menu_nav_container.style.pointerEvents = "all";
            on = false;
            }
        // CLOSE
        else if(on == false){
            menu_nav_button.classList.toggle('open-menu');
            logo_menu.style.opacity = "1";
            menu_nav_container.style.opacity = "0";
            menu_nav_container.style.transform = "translateY(-2%)";
            menu_nav_container.style.pointerEvents = "none";
            console.log(on);
            on = true;
        }

        event.stopPropagation();
    })
}

// MENU TABS - CHANGE CONTENTS EACH TABS
const nav_selected = () =>{
    const menu_nav_container = document.querySelector(".menu-nav-container");
    
    const nav_about = document.querySelector(".nav-about");
    const nav_consumer = document.querySelector(".nav-consumer");
    const nav_merchant = document.querySelector(".nav-merchant");
    const nav_driver = document.querySelector(".nav-driver");
    const nav_enterprise = document.querySelector(".nav-enterprise");

    const nav_links_about = document.querySelector(".nav-links-about");
    const nav_links_consumer = document.querySelector(".nav-links-consumer");
    const nav_links_merchant = document.querySelector(".nav-links-merchant");
    const nav_links_driver = document.querySelector(".nav-links-driver");
    const nav_links_enterprise = document.querySelector(".nav-links-enterprise");
    
    nav_about.addEventListener("click", function(event){
        nav_links_enterprise.style.display = "none";
        nav_links_driver.style.display = "none";
        nav_links_merchant.style.display = "none";
        nav_links_consumer.style.display = "none";
        menu_nav_container.style.display = "flex";
        nav_links_about.style.display = "flex";
        console.log("1");
        event.stopPropagation();
    })

    nav_consumer.addEventListener("click", function(event){
        nav_links_about.style.display = "none";
        nav_links_enterprise.style.display = "none";
        nav_links_driver.style.display = "none";
        nav_links_merchant.style.display = "none";
        menu_nav_container.style.display = "flex";
        nav_links_consumer.style.display = "flex";
        console.log("2");
        event.stopPropagation();
    })

    nav_merchant.addEventListener("click", function(event){
        nav_links_consumer.style.display = "none";
        nav_links_about.style.display = "none";
        nav_links_enterprise.style.display = "none";
        nav_links_driver.style.display = "none";
        menu_nav_container.style.display = "flex";
        nav_links_merchant.style.display = "flex";
        console.log("3");
        event.stopPropagation();
    })

    nav_driver.addEventListener("click", function(event){
        nav_links_merchant.style.display = "none";
        nav_links_consumer.style.display = "none";
        nav_links_about.style.display = "none";
        nav_links_enterprise.style.display = "none";
        menu_nav_container.style.display = "flex";
        nav_links_driver.style.display = "flex";
        console.log("4");
        event.stopPropagation();
    })

    nav_enterprise.addEventListener("click", function(event){
        nav_links_driver.style.display = "none";
        nav_links_merchant.style.display = "none";
        nav_links_consumer.style.display = "none";
        nav_links_about.style.display = "none";
        menu_nav_container.style.display = "flex";
        nav_links_enterprise.style.display = "flex";
        console.log("5");
        event.stopPropagation();
    })
}

const search_button =()=>{
    const search_logo = document.querySelector(".search-logo");
    const header_text = document.querySelector(".header-text");

    search_logo.addEventListener("click",()=>{
        search_logo.classList.toggle('search-clicked');
        header_text.classList.toggle('header-search-clicked');
    }

)}

search_button();
open_partners();
open_menu();
nav_selected();
