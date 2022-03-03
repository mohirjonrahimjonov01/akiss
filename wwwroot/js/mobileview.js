function changeVisibilityOfCategories() {
    var devicewidth = document.documentElement.clientWidth;
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

    var element = document.getElementById("navbar");
    var navbarburger = document.getElementById("navbar-burger");
    if(devicewidth < 991 || width < 991) {
        if(!element.classList.contains("navbar-mobile"))
        {
            element.classList.add("navbar-mobile");
        }
        
        if(!navbarburger.classList.contains("bi-x"))
        {
            navbarburger.classList.add("bi-x");
        }
        if(navbarburger.classList.contains("bi-list"))
        {
            navbarburger.classList.remove("bi-list");
        }
    }
    else if(devicewidth >= 991 || width >= 991) {
        if(element.classList.contains("navbar-mobile"))
        {
            element.classList.remove("navbar-mobile");
        }
        
        if(navbarburger.classList.contains("bi-x"))
        {
            navbarburger.classList.remove("bi-x");
        }
        if(!navbarburger.classList.contains("bi-list"))
        {
            navbarburger.classList.add("bi-list");
        }
    }
}