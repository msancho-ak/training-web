document.addEventListener("DOMContentLoaded", () => paintData());
 
const readMoreOrLess = () =>{
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

const showOrHideMenu = () => {

    let menuOptions = document.getElementById("menuOptions")
    let iconMenu = document.getElementById("iconMenu")
    if(window.getComputedStyle(menuOptions).display == 'none'){
        menuOptions.style.display = 'block';
        iconMenu.src ="images/close.svg"
    }
    else{
        menuOptions.style.display = 'none';
        iconMenu.src ="images/menu.svg"
    }
}
const  readRealData = async () => {
    try {
        let response =  await fetch("https://static.akurey.com/trainings/OnePieceInformation.json");
        if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
        }
        const json = await response.json();
        return json;
    }
    catch(error) {
        console.error(`Could not get data: ${error}`);
    }
}
const compareStrings =(a, b) => {
    return (a < b) ? -1 : (a > b) ? 1 : 0;
}

const paintData = ()=>{
    const json = readRealData();
    json.then((result)=>{
        let sortedIslands = result.islands.sort((a, b) =>compareStrings(a.name, b.name));
        let sortedCharacters = result.characters.sort((a, b) =>compareStrings(a.name, b.name));
        let sortedMysticObjects = result.mysticObjects.sort((a, b) =>compareStrings(a.name, b.name));
        populateData(sortedCharacters,1);
        populateData(sortedIslands,2);
        populateData(sortedMysticObjects,3);
    })
}

const populateData = (list,type)=>{
    let grid = null;
    let listSliced = null;
    if(type === 1){
        grid = document.getElementById('characters-grid');
        listSliced = list.slice(0,4);
    }
    else if(type === 2){
        grid = document.getElementById('island-grid');
        listSliced = list.slice(0,3);
    }
    else{
        grid = document.getElementById('mysticObjects-grid');
        listSliced = list.slice(0,4);
    }
    listSliced.forEach((element,index) => {
        let html = getHTMLStructure(element, type);
        grid.innerHTML = grid.innerHTML + html;
    });
}

const getHTMLStructure = (elem,type) =>{
    if(type === 1){
        const htmlStructure = `<div class="characters-container_grid_item">
                                <img src="images/${elem.img}" alt="" />
                                <p class="characters-container_grid_item_characterName">
                                    ${elem.name}
                                </p>
                            </div>`
     return htmlStructure;
    }
    else if(type ===2){
        const htmlStructure = `<div class="island-container_grid_item">
                                    <img src="images/${elem.img}" alt="" />
                                    <div class="island-container_grid_item_descripcion">
                                    <b><span>${elem.name}</span></b>
                                    <div class="island-container_grid_item_descripcion_region">
                                        <img
                                        style="width: 10px; height: 10px"
                                        src="images/loc.svg"
                                        alt=""
                                        />
                                        <span>${elem.Location}</span>
                                    </div>
                                    </div>
                                </div>`
        return htmlStructure;
    }
    else{
        const htmlStructure = `<div class="mist-objects-container_grid_item">
                            <img src="images/gommu.svg" alt="" />
                            <div class="mist-container_grid_item_descripcion">
                            <b><span>${elem.name}</span></b> 
                            <span>${elem.description.length > 190 ? elem.description.substring(0,191)+"...":elem.description }</span>
                            </div>
                        </div>`
        return htmlStructure;

    }
}






