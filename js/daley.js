(function() {
    function showHide(parent, showingChild, hiddingChild) {
        document.getElementById(parent).addEventListener('mouseover', function(event) {
            document.getElementById(hiddingChild).classList.add('showHobby');
            document.getElementById(hiddingChild).classList.remove('hideHobby');
            document.getElementById(showingChild).classList.add('hideHobby');
            document.getElementById(showingChild).classList.remove('showHobby');
        })

        document.getElementById(parent).addEventListener('mouseout', function(event) {
            document.getElementById(hiddingChild).classList.remove('showHobby');
            document.getElementById(hiddingChild).classList.add('hideHobby');
            document.getElementById(showingChild).classList.remove('hideHobby');
            document.getElementById(showingChild).classList.add('showHobby');
        })
    }
    showHide('nailsParent', 'nailsShowing', 'nailsReveal')
    showHide('vintageParent', 'vintageShowing', 'vintageReveal')
    showHide('embroideryParent', 'embroideryShowing', 'embroideryReveal')

    // collapsible stuff
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("activePortfolio");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
})()