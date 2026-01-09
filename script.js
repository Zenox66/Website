    function openList(projectName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("projectContent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("projectLink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("_active", "");
    }

    document.getElementById(projectName).style.display = "block";
    evt.currentTarget.className += " active";
    }