(function() {
    

    // collapsible stuff
    // var coll = document.getElementsByClassName("collapsible");
    // var i;

    // for (i = 0; i < coll.length; i++) {
    //     coll[i].addEventListener("click", function() {
    //         this.classList.toggle("activePortfolio");
    //         var content = this.nextElementSibling;
    //         if (content.style.maxHeight) {
    //             content.style.maxHeight = null;
    //         } else {
    //             content.style.maxHeight = content.scrollHeight + "px";
    //         }
    //     });
    // }


    document.getElementById('nailsReveal').onclick = function() {
        window.open("https://www.instagram.com/dailydaleynails/", "_blank");
    }

    document.getElementById('vintageReveal').onclick = function() {
        window.open("https://www.etsy.com/shop/DaleyVintage?ele=shop_open", "_blank");
    }
})()