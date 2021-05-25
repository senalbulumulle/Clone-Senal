/* Clone-Senal.js */
/* Written by Senal Bulumulle */
function senal() {
    document.write("<img src='./Image/senal.png' width='36'></img>"); 
}


function clone() {
    setInterval(senal, 2);
    console.log(clone);
}


function cloneConsole() {

    document.write("<img src='./Image/space.png' width='36'></img>");
}


function cloneTimer() {
    setInterval(cloneConsole, 100);
}




// Make a variable or constant called scroll to automatically scroll down. 
// Once all Senal's are reached to the bottom to the screen, it will start
// automatically scroll down. 
const scroll = setInterval(function () { window.scrollBy(0, 3000); }, 0);

// Get a "new" date
new Date();




// Call the variables 
senal();
clone();
cloneConsole();
cloneTimer();
