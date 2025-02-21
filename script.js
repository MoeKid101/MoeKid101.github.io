const clrMenuItem_MouseIn = "#F4F4F4";
const strIconPath_Home = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";


/* Set main menu list events. */
var eleMenu = document.getElementById("menu");
var lstItems = eleMenu.getElementsByClassName("menuItem");
var eleContentPage = document.getElementById("content");
for (i=0; i<lstItems.length; i++) {
    var local = lstItems[i];
    local.onmouseover = function() {
        this.style.backgroundColor = clrMenuItem_MouseIn;
    }
    local.onmouseout = function() {
        this.style.backgroundColor = "";
    }
    local.onclick = async function() {
        /* Get target file */
        var eleMenuText = this.getElementsByClassName("menuText")[0];
        var strItemText = eleMenuText.innerHTML;
        var strFilePath = strItemText + ".html";
        /* Read file and load on page */
        // fetch(strFilePath)
        //     .then(response => response.text())
        //     .then(text => document.getElementById('content').innerHTML = text);
        alert(strFilePath);
        const response = await fetch(strFilePath);
        const movies = await response.text();
        alert(movies);
    }
}

