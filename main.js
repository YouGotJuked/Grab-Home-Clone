const open_partners = () =>{
    const partner_toggle = document.querySelector(".partner-toggle");
    const contents = document.querySelector(".partner-contents");
    //Click Partners ^
    partner_toggle.addEventListener("click", () => {
        contents.classList.toggle('open');
    })
}

const open_menu = () =>{
    const menu_nav_button = document.querySelector(".menu-nav");
    const menu_nav_container = document.querySelector(".menu-nav-container");

    let on = true;

    menu_nav_button.addEventListener("click", () =>{
        if(on == true){
        menu_nav_container.style.display = "flex";
        // console.log(on);
        on = false;
        }
        else if(on == false){
        menu_nav_container.style.display = "none";
        // console.log(on);
        on = true;
        }
    })
}

const nav_selected = () =>{
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
    
    nav_about.addEventListener("click", () =>{
        nav_links_enterprise.style.display = "none";
        nav_links_driver.style.display = "none";
        nav_links_merchant.style.display = "none";
        nav_links_consumer.style.display = "none";
        nav_links_about.style.display = "flex";
    })

    nav_consumer.addEventListener("click", () =>{
        nav_links_about.style.display = "none";
        nav_links_enterprise.style.display = "none";
        nav_links_driver.style.display = "none";
        nav_links_merchant.style.display = "none";
        nav_links_consumer.style.display = "flex";
    })

    nav_merchant.addEventListener("click", () =>{
        nav_links_consumer.style.display = "none";
        nav_links_about.style.display = "none";
        nav_links_enterprise.style.display = "none";
        nav_links_driver.style.display = "none";
        nav_links_merchant.style.display = "flex";
    })

    nav_driver.addEventListener("click", () =>{
        nav_links_merchant.style.display = "none";
        nav_links_consumer.style.display = "none";
        nav_links_about.style.display = "none";
        nav_links_enterprise.style.display = "none";
        nav_links_driver.style.display = "flex";
    })

    nav_enterprise.addEventListener("click", () =>{
        nav_links_driver.style.display = "none";
        nav_links_merchant.style.display = "none";
        nav_links_consumer.style.display = "none";
        nav_links_about.style.display = "none";
        nav_links_enterprise.style.display = "flex";
    })
}

open_partners();
open_menu();
nav_selected();
