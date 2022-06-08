function readMoreOrLess(){
    let readMoreDiv = document.getElementById("readMoreSipnosis")
    let readMoretext = document.getElementById("readMoreText")
    let readMoreIcon = document.getElementById("readMoreIcon")
    let logoReadMore = document.getElementById("logoReadMore")
    
    if(window.getComputedStyle(readMoreDiv).display == 'none'){
        logoReadMore.style.display = 'block';
        readMoreDiv.style.display = 'block';
        readMoretext.innerText = "Read Less"
        readMoreIcon.src ="images/readLess.svg"

    }
    else{
        logoReadMore.style.display = 'none';
        readMoreDiv.style.display = 'none';
        readMoretext.innerText = "Read All"
        readMoreIcon.src ="images/readMore.svg"
        
    }
    
}